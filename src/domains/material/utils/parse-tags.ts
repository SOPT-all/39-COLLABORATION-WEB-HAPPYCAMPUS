export const parseTags = (tag: string) =>
  tag
    .split(/[#,]/)
    .map((item) => item.trim())
    .filter(Boolean);
