import { cwd } from "node:process";
import * as fs from "fs";

const outDir = `${cwd()}/dist`;
const htaccess = `${outDir}/.htaccess`;

const startToken = "START-OF-WHITELIST";
const endToken = "END-OF-WHITELIST";

export const mkApacheWhitelist = (routes) => {
  const oldFile = fs.readFileSync(htaccess, "utf8");
  const [rawFirstPart, remainingPart] = oldFile.split(startToken);
  const firstPart = `${rawFirstPart}${startToken}`;
  const [_, rawLastPart] = remainingPart.split(endToken);
  const lastPart = `${endToken}${rawLastPart}`;
  const middle = "\n  # Foobar\n";
  const newFile = `${firstPart}${middle}${lastPart}`;
  fs.writeFileSync(htaccess, newFile);
};
