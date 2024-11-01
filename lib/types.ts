// types.ts

export type CallbackError = Error | null;
export type CopyDirectoryFunction = (src: string, dest: string) => Promise<void>;
