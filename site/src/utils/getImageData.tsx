export const getImageData = (id: string) => {
  const [fileType, assetsId, dimensions, format] = id.split('-') as string[];
  const [width, height] = dimensions.split('x').map((v) => parseInt(v, 10));

  return {
    fileType,
    assetsId,
    dimensions: { width, height },
    format,
  };
};
