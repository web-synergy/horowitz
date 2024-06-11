export const truncateDescription = (
  description: string,
  length: number
): string => {
  if (description.length <= length) {
    return description;
  }

  return description.slice(0, length);
};
