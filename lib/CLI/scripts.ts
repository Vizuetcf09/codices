// index.ts
import { updatePackageJson } from "./config";
import { Scripts } from "./types";

// Scripts que deseas agregar
const newScripts: Scripts = {
  node: "node dist/index.js",
  sass: "sass --watch codices/scss:codices/styles",
};

// Llama a la función para actualizar package.json
updatePackageJson(newScripts);

/* 
Scripts

- node: node dist/index.js
- sass: sass --watch codices/scss:codices/styles
- scripts: node dist/CLI/index.js

*/
