export const getPgfSize = (width: number) => {
  const tempHeight = Math.floor(width / 0.71);

  return { width: width, height: tempHeight };
};
