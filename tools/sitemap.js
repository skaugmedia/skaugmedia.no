import prettier from "prettier";
import xml from "xml";
import * as fs from "note:fs";

const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
const baseURL = "https://skaugmedia.no";
const outPath = `${cwd()}/dist/sitemap.xml`;

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

export const mkSiteMap = (routes) =>
  prettier.format(`${xmlHeader} ${xml(baseXML(routes.map(mkUrl)), true)}`, {
    parser: "html",
  });

export const updateSiteMap = (routes) => {
  const sitemap = mkSiteMap(routes);
  fs.writeFileSync(outPath, sitemap);
  console.log("Sitemap generated");
};
