// index.ts
import { updateScripts } from "./functions";
import { Scripts } from "./types";

// Scripts que deseas agregar
const newScripts: Scripts = {
  node: "node dist/index.js",
  sass: "sass --watch codices/scss:codices/styles",
  scripts: "node dist/CLI/index.js",
};

// Llama a la función para actualizar package.json
updateScripts(newScripts);

/* 
Scripts

- node: node dist/index.js
- sass: sass --watch codices/scss:codices/styles
- scripts: node dist/CLI/index.js

*/ 