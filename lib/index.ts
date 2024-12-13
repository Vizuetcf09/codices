import { introMessages } from "./messages";
import { updatePackageJson } from "./CLI/package";
import { copyDirectory } from "./CLI/scss";

export async function main() {
  const exit = () => process.exit(0);
  process.on("SIGINT", exit);
  process.on("SIGTERM", exit);
}

export { introMessages, updatePackageJson, copyDirectory };
