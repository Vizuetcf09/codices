//
// start-code
//
// node
//
import * as fs from "fs";
import * as path from "path";
//
import { Scripts } from "./types";
import { newScriptsMap } from "./scripts";
//
//
export function initAndUpdateProject(newScriptsMap: Scripts): void {
  const projectName = process.argv[2] || "codices-project";
  const projectPath = path.join(process.cwd(), projectName);
  const packageJsonPath = path.join(projectPath, "package.json");
  // const packageJsonPath = path.join(process.cwd(), "package.json");

  const defaultPackageJson = {
    name: projectName,
    version: "1.0.0",
    scripts: {},
  };

  if (!fs.existsSync(packageJsonPath)) {
    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(defaultPackageJson, null, 2)
    );
    console.log(`\n📦 Created package.json`);
  }

  fs.readFile("package.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading package.json:\n", err);
      return;
    }

    try {
      const packageJson = JSON.parse(data);

      packageJson.scripts = { ...packageJson.scripts, ...newScriptsMap };

      fs.writeFile(
        packageJsonPath,
        JSON.stringify(packageJson, null, 2),
        (writeErr) => {
          if (writeErr) {
            console.error("Error writing in package.json:\n", writeErr);
          } else {
            console.log("✅ Updated package.json");
          }
        }
      );
    } catch (parseError) {
      console.error("Error parsing package.json:\n", parseError);
    }
  });
  console.log("\n✨ Project initialized and updated successfully!\n");
}
//
// Use updatePackageJson
//
initAndUpdateProject(newScriptsMap);
//
// endcode
//
