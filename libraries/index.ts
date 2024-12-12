import { introBanner } from "./CLI/bannerIntro";
import { updatePackageJson } from "./CLI/package";
import { copyDirectory } from "./CLI/scss";
// import { getContext } from "./CLI/context";

// const exit = () => process.exit(0);
// process.on("SIGINT", exit);
// process.on("SIGTERM", exit);

// export async function main() {
// Add some extra spacing from the noisy npm/pnpm init output
// biome-ignore lint/suspicious/noConsoleLog: allowed
console.log("hola mundo");
// NOTE: In the v7.x version of npm, the default behavior of `npm init` was changed
// to no longer require `--` to pass args and instead pass `--` directly to us. This
// broke our arg parser, since `--` is a special kind of flag. Filtering for `--` here
// fixes the issue so that create-astro now works on all npm versions.
//   const cleanArgv = process.argv.slice(2).filter((arg) => arg !== "--");
//   const ctx = await getContext(cleanArgv);
//   if (ctx.help) {
// help();
// return;
//   }
// }
export { introBanner, updatePackageJson, copyDirectory };
//
// endcode
//
