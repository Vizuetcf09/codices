// index.ts
import { Scripts } from "./types";

// Scripts que deseas agregar
export const newScripts: Scripts = {
  sass: "sass --watch codices/scss:codices/styles",
};

/* 
Scripts

- node: node dist/index.js
- sass: sass --watch codices/scss:codices/styles
- scripts: node dist/CLI/index.js

*/
