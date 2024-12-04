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
const packageJsonPath = path.join(process.cwd(), "package.json");
//
// updatePac
//
export function updatePackageJson(newScriptsMap: Scripts): void {
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
            console.log("Updated package.json");
          }
        }
      );
    } catch (parseError) {
      console.error("Error parsing package.json:\n", parseError);
    }
  });
}
//
// Use updatePackageJson
//
updatePackageJson(newScriptsMap);
//
// endcode
//
