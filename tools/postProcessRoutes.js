import * as fs from "node:fs";
import { cwd } from "node:process";
import { pathToFileURL } from "node:url";
import { updateSiteMap } from "file:///sitemap.js";
import { updateApacheWhitelist } from "file:///whitelist.js";

const routeDir = `${cwd()}/src/Routes`;
const photoDir = `${cwd()}/src/Data/Photography`;
const designDir = `${cwd()}/src/Data/GraphicalDesign`;

const complexRoutes = ["GraphicalDesignProject", "PhotographyCategory"];

const routePriorities = {
  "": 1.0,
  priser: 1.0,
  ommeg: 0.5,
  kontakt: 0.8,
  grafiskdesign: 0.4,
  fotografi: 0.4,
};

const getID = (s) => s.match(/^ +id: ?"((?:\w|\d|-|_)+)",$/m)?.[1];

const getSubPath = (s) => {
  const subPath = s.match(/^import \w+ from "(.+)";$/m)?.[1];
  if (!subPath) {
    throw new Error(`Could not get sub path for ${s}`);
  }
  return subPath;
};

const getSubPages = (baseDir) =>
  fs
    .readFileSync(`${baseDir}/index.js`, "utf8")
    .split("\n")
    .filter((s) => s.startsWith("import"))
    .map(getSubPath)
    .map((subPath) => ({
      name: subPath,
      file: fs.readFileSync(`${baseDir}/${subPath}/index.js`, "utf8"),
    }))
    .map((p) => {
      const id = getID(p.file);
      if (!id) {
        throw new Error(`Could not find ID for ${p.name}`);
      }
      return id;
    });

const getRoutes = async (subPageMap) =>
  Promise.all(
    fs
      .readdirSync(routeDir, { withFileTypes: true })
      .filter((f) => f.isDirectory() && !complexRoutes.includes(f.name))
      .flatMap((f) => {
        const routeFile = `${routeDir}/${f.name}/Route.js`;
        if (fs.existsSync(routeFile)) {
          try {
            const file = pathToFileURL(routeFile);
            console.log(file);
            return [import(file)];
          } catch (e) {
            return [];
          }
        }
        return [];
      })
  ).then((xs) =>
    xs
      .map((r) => ({ route: r.default, priority: routePriorities[r.default] }))
      .flatMap((r) => {
        const subs = subPageMap[r.route];
        return [
          r,
          ...(subs?.map((sub) => ({
            route: `${r.route}/${sub}`,
            priority: 0.1,
          })) ?? []),
        ];
      })
  );

(async () => {
  const photoPages = getSubPages(photoDir);
  const designPages = getSubPages(designDir);
  const subPageMap = {
    fotografi: photoPages,
    grafiskdesign: designPages,
  };
  const routes = await getRoutes(subPageMap);

  updateSiteMap(routes);
  updateApacheWhitelist(routes);
})();
