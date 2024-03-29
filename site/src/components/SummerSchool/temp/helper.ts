// this is temp file
// only for slider demonstration

export const getRenderList = (btnsList, ImgsList, mainImgIdx) => {
  const imgsList = [...ImgsList]
  // @ts-ignore
  const firstBG = imgsList.filter(image => image.title === mainImgIdx).pop()
  let imgIdx = parseInt(mainImgIdx) + 1
  // @ts-ignore
  const renderList = btnsList.reduce((acc, btn, idx) => {
    if (idx === 0) {
      acc.push({ ...btn, ...firstBG })
      return acc
    }
    if (!imgsList[imgIdx]) imgIdx = 0
    acc.push({ ...btn, ...imgsList[imgIdx] })
    imgIdx += 1
    return acc
  }, [])
  return renderList
}
