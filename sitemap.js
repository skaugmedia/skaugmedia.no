import { stripIndent } from "common-tags";
import * as fs from "node:fs";
import { cwd } from "node:process";
import prettier from "prettier";
import xml from "xml";

const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
const baseURL = "https://skaugmedia.no";
const routeDir = `${cwd()}/src/Routes`;
const photoDir = `${cwd()}/src/Data/Photography`;
const designDir = `${cwd()}/src/Data/GraphicalDesign`;
const outPath = `${cwd()}/dist/sitemap.xml`;

const complexRoutes = ["GraphicalDesignProject", "PhotographyCategory"];

const routePriorities = {
  "": 1.0,
  priser: 1.0,
  ommeg: 0.5,
  kontakt: 0.8,
  grafiskdesign: 0.4,
  fotografi: 0.4,
};

const mkUrl = ({ route, priority }) => ({
  url: [
    { loc: `${baseURL}/${route}` },
    { lastmod: new Date().toISOString() },
    { changefreq: "weekly" },
    { priority: priority ?? 0.5 },
  ],
});

const baseXML = (routes) => ({
  urlset: [
    {
      _attr: {
        xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
        "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "xsi:schemaLocation":
          "http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd",
      },
    },
    ...routes,
  ],
});

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

(async () => {
  const photoPages = getSubPages(photoDir);
  const designPages = getSubPages(designDir);
  const subPages = {
    fotografi: photoPages,
    grafiskdesign: designPages,
  };

  const baseRoutes = (
    await Promise.all(
      fs
        .readdirSync(routeDir, { withFileTypes: true })
        .filter((f) => f.isDirectory() && !complexRoutes.includes(f.name))
        .flatMap((f) => {
          const routeFile = `${routeDir}/${f.name}/Route.js`;
          if (fs.existsSync(routeFile)) {
            try {
              return [import(`${routeDir}/${f.name}/Route.js`)];
            } catch (e) {
              return [];
            }
          }
          return [];
        })
    )
  )
    .map((r) => ({ route: r.default, priority: routePriorities[r.default] }))
    .flatMap((r) => {
      const subs = subPages[r.route];
      return [
        r,
        ...(subs?.map((sub) => ({
          route: `${r.route}/${sub}`,
          priority: 0.1,
        })) ?? []),
      ];
    })
    .map(mkUrl);

  const final = baseXML(baseRoutes);

  const finalXML = prettier.format(`${xmlHeader} ${xml(final, true)}`, {
    parser: "html",
  });

  fs.writeFileSync(outPath, finalXML);
  console.log("Sitemap generated");
})();
