export const getPgfSize = (width: number, isOnePage: boolean) => {
  // const maxHeight = Math.floor(window.innerHeight * 0.7);

  const calcWidth = isOnePage ? width : Math.floor(width / 2);

  const tempHeight = Math.floor(calcWidth / 0.71);

  // if (tempHeight > maxHeight) {
  //   const tempWidth = Math.floor(maxHeight * 0.71);
  //   return { width: tempWidth, height: maxHeight };
  // }

  return { width: calcWidth, height: tempHeight };
};
