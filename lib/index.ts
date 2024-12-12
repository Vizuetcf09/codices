import { introMessages, projectType } from "@lib/messages";
import { updatePackageJson } from "@lib/CLI/package";
import { copyDirectory } from "@lib/CLI/scss";

const exit = () => process.exit(0);
process.on("SIGINT", exit);
process.on("SIGTERM", exit);

export async function main() {
  const labels = {
    start: "Creating Códices...",
    end: "Created Códices!",
  };
  console.log(labels);
}

export { introMessages, projectType, updatePackageJson, copyDirectory };
