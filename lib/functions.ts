import fs from "fs";
import { FileReadCallback } from "./types";

function readFile(
  filePath: string,
  encoding: BufferEncoding = "utf8"
): Promise<string> {
  return new Promise((resolve, reject) => {
    const callback: FileReadCallback = (err, data) => {
      if (err) {
        reject(err);
        console.error(err);
      } else {
        resolve(data as string);
        console.log(data);
      }
    };

    fs.readFile(filePath, encoding, callback);
  });
}

// Uso de la función
readFile("./src/pages/index.astro");
