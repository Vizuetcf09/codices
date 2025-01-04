import * as fs from "fs";
import * as path from "path";
import { packageJsonInfoTypes } from "./types";
import { defaultPackageJson, packageJsonInfo } from "./utils";

export function updatePackageJson(packageJsonInfo: packageJsonInfoTypes) {
  const packageJsonPath = path.join(process.cwd(), "package.json");

  if (!fs.existsSync(packageJsonPath)) {
    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(defaultPackageJson, null, 2)
    );
    console.log(`\n📦 Created package.json`);
  }

  fs.readFile("package.json", "utf8", (err, data) => {
    if (err) {
      console.error("\n❌ Error reading package.json:\n", err);
      return;
    }

    try {
      const packageJson = JSON.parse(data);

      packageJson.scripts = { ...packageJson.scripts, ...packageJsonInfo };

      fs.writeFile(
        packageJsonPath,
        JSON.stringify(packageJson, null, 2),
        (writeErr) => {
          if (writeErr) {
            console.error("\n❌ Error writing in package.json:\n", writeErr);
          } else {
            console.log(`\n✅ Updated package.json`);
          }
        }
      );
    } catch (parseError) {
      console.error("\n❌ Error parsing package.json:\n", parseError);
    }
  });
  console.log("\n✨ Project initialized and updated successfully!:\n");
}

updatePackageJson(packageJsonInfo);
