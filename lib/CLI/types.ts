// Scripts types
//
export interface Scripts {
  [key: string]: string;
}
//
//  copyDirectoryTypes
//
export type copyDirectoryTypes = (
  src: string,
  dest: string
  // components: string
) => Promise<void>;
//

//
//
export interface introContextTypes {
  skipWelcome: boolean;
  welcome?: string;
}

export type project = {
  name: string;
  display: string;
  variants: proyectVariant[];
};

export type proyectVariant = {
  name: string;
  display: string;
  customCommand?: string;
};

export interface packageJsonInfoTypes {
  [key: string]: string; // Claves de scripts como strings y valores también strings
}
