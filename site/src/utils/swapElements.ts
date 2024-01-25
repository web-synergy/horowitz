export const swapElementsInArray = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  array: any, // Ensure that the array is an array of ArrayElement objects
  index1: number,
  index2: number
) => {
  if (array && array.length > index1 && array.length > index2) {
    const newArray = [...array]; // Create a new array to avoid mutation
    [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
    return newArray;
  }
  return array;
};
