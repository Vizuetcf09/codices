import { copyFile, constants } from "node:fs";
import { CallbackError } from "./types";

function callback(err: CallbackError): void {
  if (err) {
    console.error("Error copying file:", err.message);
    return; // Regresamos después de manejar el error
  }
  console.log("index.astro was copied to destination.txt");
}

// destination.txt will be created or overwritten by default.
copyFile("./src/pages/index.astro", "./astro/index.astro", callback);
