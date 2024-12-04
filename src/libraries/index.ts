#!/usr/bin/env node

//
// index.ts
//
// import { initProject } from "./CLI/create";
import { introBanner } from "./CLI/bannerIntro";
import { updatePackageJson } from "./CLI/package";
import { copyDirectory } from "./CLI/scss";
//
// Exit process
//
const exit = () => process.exit(0);
process.on("SIGINT", exit);
process.on("SIGTERM", exit);
// main function
//
// export async function main() {
//   console.log("");
//
//   const steps = [introBanner, updatePackageJson, copyDirectory];
// }
//
// exports
//
export { introBanner, updatePackageJson, copyDirectory };
//
// endcode
//
