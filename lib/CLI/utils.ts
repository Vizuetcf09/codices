import { packageJsonInfoTypes } from "./types";

export const defaultPackageJson = {
  version: "0.0.1",
  scripts: {
    sass: "sass --watch src/scss/globals.scss src/styles/globals.css",
  },
};

export const packageJsonInfo: packageJsonInfoTypes = {
  sass: "sass --watch src/scss/globals.scss src/styles/globals.css",
};
