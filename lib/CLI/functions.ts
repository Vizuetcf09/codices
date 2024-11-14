// scriptUpdater.ts
import * as fs from "fs";
import * as path from "path";
import { Scripts } from "./types";

const packageJsonPath = path.join(__dirname, "../../../../package.json");

// Función para leer y actualizar los scripts en package.json
export function updateScripts(newScripts: Scripts): void {
  fs.readFile(packageJsonPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer package.json:", err);
      return;
    }

    try {
      const packageJson = JSON.parse(data);

      // Actualiza los scripts en el archivo JSON
      packageJson.scripts = { ...packageJson.scripts, ...newScripts };

      // Escribe los cambios en el archivo
      fs.writeFile(
        packageJsonPath,
        JSON.stringify(packageJson, null, 2),
        (writeErr) => {
          if (writeErr) {
            console.error("Error al escribir en package.json:", writeErr);
          } else {
            console.log("Nuevos scripts agregados a package.json.");
          }
        }
      );
    } catch (parseError) {
      console.error("Error al parsear package.json:", parseError)
    }
  });
}
