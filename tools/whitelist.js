import { cwd } from "node:process";
import * as fs from "fs";
import { stripIndent } from "common-tags";

const outDir = `${cwd()}/dist`;
const htaccess = `${outDir}/.htaccess`;

const startToken = "# START-OF-WHITELIST";
const endToken = "# END-OF-WHITELIST";

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

export const updateApacheWhitelist = (routes) => {
  const oldFile = fs.readFileSync(htaccess, "utf8");
  const [firstPart, remainingPart] = oldFile.split(startToken);
  const [_, lastPart] = remainingPart.split(endToken);
  const entries = mkEntries(routes);
  const middle = indent("\t", `${pre}\n${entries}\n${denyOthers}`);
  const newFile = `${firstPart}\n${middle}\n${lastPart}`;
  fs.writeFileSync(htaccess, newFile);
  console.log("Whitelist generated");
};
