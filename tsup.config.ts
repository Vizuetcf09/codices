import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["src/libraries/index.ts", "src/libraries/CLI/index.ts"],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
});
