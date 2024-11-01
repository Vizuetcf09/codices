export type FileReadCallback = (
  err: NodeJS.ErrnoException | null,
  data: string | undefined
) => void;
