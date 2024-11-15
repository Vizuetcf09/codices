import { updatePackageJson } from "./CLI/config";
import { copyDirectory } from "./CLI/src";
import { intro } from "./CLI/intro";

const exit = () => process.exit(0);
process.on("SIGINT", exit);
process.on("SIGTERM", exit);

export async function main() {
  console.log("");

  const steps = [intro];
}

export { intro, updatePackageJson, copyDirectory };
