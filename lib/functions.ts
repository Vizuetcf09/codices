import { promises as fs } from "node:fs";
import * as path from "path";
import { callbackError, copyDirectoryTypes } from "./types";

// copyDirectory.ts

// Función para copiar un directorio
const copyDirectory: copyDirectoryTypes = async (src, dest) => {
  // Crea el directorio de destino si no existe
  await fs.mkdir(dest, { recursive: true });

  // Lee los contenidos del directorio de origen
  const items = await fs.readdir(src);

  // Copia cada elemento del directorio
  for (const item of items) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    // Obtiene información sobre el elemento
    const stat = await fs.stat(srcPath);

    if (stat.isDirectory()) {
      // Si el elemento es un directorio, copia recursivamente
      await copyDirectory(srcPath, destPath);
    } else {
      // Si el elemento es un archivo, lo copia
      await fs.copyFile(srcPath, destPath);
    }
  }
};

// Uso de la función
const sourceDir = "codices";
const destDir = "../../../src";

copyDirectory(sourceDir, destDir)
  .then(() => console.log("Directorio copiado exitosamente."))
  .catch((err: callbackError) =>
    console.error("Error al copiar el directorio:", err)
  );
