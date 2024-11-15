import { intro } from "./CLI/intro";
import { updatePackageJson } from "./CLI/config";
import { copyDirectory } from "./CLI/src";

const exit = () => process.exit(0);
process.on("SIGINT", exit);
process.on("SIGTERM", exit);

// export async function main() {
//   console.log("");

//   const steps = [intro, updatePackageJson, copyDirectory];
// }

export { intro, updatePackageJson, copyDirectory };
