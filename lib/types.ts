export type CallbackError = Error | null;
export type CopyDirectoryTypes = (
  src: string,
  dest: string
) => Promise<void>;
