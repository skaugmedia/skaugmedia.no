import * as ftp from "basic-ftp";
import dotenv from "dotenv";
import { readdir, stat } from "fs/promises";
import { stdin as input, stdout as output, cwd } from "node:process";
import * as readline from "node:readline/promises";
import { basename, join } from "path";

dotenv.config({ path: `${cwd()}/.env.local` });

const dirSize = async (dir) => {
  const files = await readdir(dir, { withFileTypes: true });

  const paths = files.map(async (file) => {
    const path = join(dir, file.name);

    if (file.isDirectory()) {
      return dirSize(path);
    }

    if (file.isFile()) {
      const { size } = await stat(path);
      return size;
    }

    return 0;
  });

  return (await Promise.all(paths))
    .flat(Infinity)
    .reduce((i, size) => i + size, 0);
};

const clearNonMatching = async (client, files) => {
  const remoteFiles = await client.list();
  const nonMatching = remoteFiles.filter((f) => !files.includes(f.name));
  let count = 0;
  for (const f of nonMatching) {
    await client.remove(f.name);
    count += 1;
  }
  console.log(`Cleared ${count} redundant files`);
};

const uploadIfNotMatched = async (client, filePath, files) => {
  const fileName = basename(filePath);
  if (!files.find((f) => f.name === fileName)) {
    await client.uploadFrom(filePath, fileName);
    return true;
  }
  return false;
};

const getDirectChildren = async (path) => {
  const children = await readdir(path, { withFileTypes: true });
  return children.filter((f) => f.isFile()).map((f) => f.name);
};

const getUsername = (rl) => {
  return process.env.FTP_USERNAME ?? rl.question("FTP Username: ");
};

const getPassword = (rl) => {
  return process.env.FTP_PASSWORD ?? rl.question("FTP Password: ");
};

(async () => {
  const rl = readline.createInterface({ input, output });
  const sourceDir = "./dist";
  console.log("Input credentials for Skaugmedia Domeneshop FTP");
  const user = await getUsername(rl);
  const password = await getPassword(rl);
  console.log("Connecting...");

  const client = new ftp.Client();

  try {
    await client.access({
      host: "ftp.domeneshop.no",
      user,
      password,
      secure: true,
    });
    await client.cd("www");
    console.log("Uploading...");
    const assetFiles = await getDirectChildren(`${sourceDir}/assets`);
    await client.ensureDir("assets");
    const remoteFiles = await client.list();
    let assetsCount = 0;
    for (const fileName of assetFiles) {
      const wasUploaded = await uploadIfNotMatched(
        client,
        `${sourceDir}/assets/${fileName}`,
        remoteFiles
      );
      if (wasUploaded) {
        assetsCount += 1;
      }
    }
    await client.cdup();
    const rootFiles = await getDirectChildren(sourceDir);
    let rootCount = 0;
    for (const fileName of rootFiles) {
      await client.uploadFrom(`${sourceDir}/${fileName}`, fileName);
      rootCount += 1;
    }
    await client.ensureDir("assets");
    await clearNonMatching(client, assetFiles);
    console.log(`Uploaded ${assetsCount} files to the assets folder`);
    console.log(`Uploaded ${rootCount} files to the root folder`);
    console.log(`Uploaded ${assetsCount + rootCount} files in total`);
    console.log("Deployment complete");
  } catch (e) {
    console.error("Failed");
    console.error(e);
  } finally {
    client.close();
    rl.close();
  }
})();
