import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["libraries/index.ts", "libraries/CLI/index.ts"],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
});
