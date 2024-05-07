export const getPgfSize = (
  width: number,
  height: number,
  minusHeader: number
) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight - minusHeader;
  const scaleX = windowWidth / width;
  const scaleY = windowHeight / height;

  const scale = Math.min(scaleX, scaleY) * 0.8;
  const pdfWidth = Math.round(width * scale);
  const pdfHeight = Math.round(height * scale);
  return { pdfHeight, pdfWidth, windowWidth };
};
