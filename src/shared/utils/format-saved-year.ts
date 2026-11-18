export const formatSavedYear = (savedYear: number) => {
  const value = String(savedYear);
  return `${value.slice(0, 4)}.${value.slice(4)}`;
};
