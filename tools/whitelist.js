import { stripIndent } from "common-tags";
import * as fs from "fs";
import { cwd } from "node:process";

const outDir = `${cwd()}/dist`;
const htaccess = `${outDir}/.htaccess`;

const preamble = `
<IfModule mod_negotiation.c>
  Options -MultiViews
</IfModule>
<IfModule mod_rewrite.c>
	RewriteEngine On
	RewriteBase /
	RewriteRule ^index\.html$ - [L]
`;

const postamble = `
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteRule . /index.html [L]
</IfModule>
`;

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
  console.log(routes);
  const entries = mkEntries(routes);
  const middle = indent("\t", `${pre}\n${entries}\n${denyOthers}`);
  const newFile = `${preamble}\n${middle}\n${postamble}`;
  fs.writeFileSync(htaccess, newFile);
  console.log("Whitelist generated");
};
