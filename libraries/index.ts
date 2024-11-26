//
// start-code
//
import { introBanner } from "./CLI/bannerIntro";
import { updatePackageJson } from "./CLI/packageJson";
import { copyDirectory } from "./CLI/src";
//
// Exit process
//
const exit = () => process.exit(0);
process.on("SIGINT", exit);
process.on("SIGTERM", exit);
//
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
