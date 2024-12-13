import { promises as fs } from "node:fs";
import * as path from "path";

import { copyDirectoryTypes } from "./types";

export const copyDirectory: copyDirectoryTypes = async (src, dest) => {
  await fs.mkdir(dest, { recursive: true });

  const items = await fs.readdir(src);

  for (const item of items) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    const stat = await fs.stat(srcPath);

    if (stat.isDirectory()) {
      await copyDirectory(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
};
//
// sourceDir and destDir
//
const sourceDir = "node_modules/codices/src/scss";
const destDir = "./src/scss";
//
// Use copuDirectory
//
copyDirectory(sourceDir, destDir)
  .then(() => console.log("✅ Directory copied successfully"))
  .catch((err: Error | null) =>
    console.error("\n ❌Error copying directory:\n", err)
  );
//
// endcode
//
