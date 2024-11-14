export type callbackError = Error | null;
export type copyDirectoryTypes = (
  src: string,
  dest: string
) => Promise<void>;
