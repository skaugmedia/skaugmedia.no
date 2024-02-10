import * as fs from "node:fs";
import * as path from "node:path";
import { cwd } from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";
import BusinessRoute from "../src/Routes/BusinessPrices/Route.js";
import GraphicalDesignRoute from "../src/Routes/GraphicalDesign/Route.js";

const routeDir = `${cwd()}/src/Routes`;
const businessGalleriesDir = `${cwd()}/src/Data/Business/Galleries`;
const businessGraphicalDesignDir = `${cwd()}/src/Data/Business/GraphicalDesign`;
const photoDir = `${cwd()}/src/Data/Photography`;

const skippedRoutes = [
  "GraphicalDesign",
  "GraphicalDesignProject",
  "PhotographyCategory",
];

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
      .filter((f) => f.isDirectory() && !skippedRoutes.includes(f.name))
      .flatMap((f) => {
        const routeFile = `${routeDir}/${f.name}/Route.js`;
        if (fs.existsSync(routeFile)) {
          try {
            const file = pathToFileURL(routeFile);
            return [import(file)];
          } catch (e) {
            return [];
          }
        }
        return [];
      }),
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
      }),
  );

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(async () => {
  const sitemapFile = pathToFileURL(`${__dirname}/sitemap.js`).href;
  const whitelistFile = pathToFileURL(`${__dirname}/whitelist.js`).href;

  const { updateSiteMap } = await import(sitemapFile);
  const { updateApacheWhitelist } = await import(whitelistFile);

  const photoPages = getSubPages(photoDir);
  const businessGalleryPages = getSubPages(businessGalleriesDir);
  const businessGraphicalDesignPages = getSubPages(businessGraphicalDesignDir);
  const subPageMap = {
    fotografi: photoPages,
    [BusinessRoute]: businessGalleryPages,
    [`${BusinessRoute}/${GraphicalDesignRoute}`]: businessGraphicalDesignPages,
  };
  const routes = await getRoutes(subPageMap);

  await updateSiteMap(routes);
  updateApacheWhitelist(routes);
})();
