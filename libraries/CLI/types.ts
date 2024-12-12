// start-code
//
// Types
//
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
export interface introContext {
  skipWelcome: boolean;
  welcome?: string;
}
//
// endcode
//
