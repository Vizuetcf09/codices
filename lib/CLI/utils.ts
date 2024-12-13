import { packageJsonInfoTypes } from "./types";

export const defaultPackageJson = {
  name: "codices-project",
  version: "1.0.0",
  scripts: {},
};

export const packageJsonInfo: packageJsonInfoTypes = {
  version: "1.0.0",
  scripts: {
    sass: "sass --no-source-map src/styles:dist/styles",
    "sass:watch": "sass --watch src/styles:dist/styles",
  },
};
