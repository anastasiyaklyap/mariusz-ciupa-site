
export const linkPath = (path: string) => {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [rawPath, hash] = path.split("#");
  const withSlash = rawPath.endsWith("/") ? rawPath : `${rawPath}/`;
  return `${basePath}${withSlash}${hash ? `#${hash}` : ""}`;
};
