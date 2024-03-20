import { stripIndent } from "common-tags";
import * as fs from "fs";
import { cwd } from "node:process";

const outDir = `${cwd()}/dist`;
const sourceFile = `${cwd()}/public/.htaccess`;
const htaccess = `${outDir}/.htaccess`;

const pre = stripIndent`
    # ignore actual files and directories
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
`;

const mkEntry = (route) => `RewriteCond %{REQUEST_URI} !^/${route.route}$`;

const mkEntries = (routes) =>
  "# Whitelist valid routes\n".concat(routes.map(mkEntry).join("\n"));

const denyOthers = stripIndent`
    # Return 404 for any other routes
    RewriteRule ^ - [R=404,L]
`;

const indent = (c, s) =>
  s
    .split("\n")
    .map((s) => `${c}${s}`)
    .join("\n");

const source = fs.readFileSync(sourceFile, "utf8");

export const updateApacheWhitelist = (routes) => {
  const entries = mkEntries(routes);
  const middle = indent("\t", `${pre}\n${entries}\n${denyOthers}`);

  const newFile = source.replace(/# WHITELIST-HERE/, middle);
  fs.writeFileSync(htaccess, newFile);
  console.log("Whitelist generated");
};
