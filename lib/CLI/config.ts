// scriptUpdater.ts
import * as fs from "fs";
import * as path from "path";
import { Scripts } from "./types";

// Ruta del archivo package.json del proyecto
const packageJsonPath = path.join(process.cwd(), "package.json"); // Lee el package.json del proyecto actual

// Función para leer y actualizar los scripts en package.json
export function updatePackageJson(newScripts: Scripts): void {
  fs.readFile(packageJsonPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer package.json:", err);
      return;
    }

    try {
      const packageJson = JSON.parse(data);

      // Actualizar los scripts en el archivo JSON
      packageJson.scripts = { ...packageJson.scripts, ...newScripts };

      // Escribir los cambios en el archivo
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
      console.error("Error al parsear package.json:", parseError);
    }
  });
}
