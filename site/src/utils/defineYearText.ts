export const defineYearsText = (year: number) => {
  const one = [1];
  const two = [2, 3, 4];
  if (year < 21) {
    if (one.includes(year)) {
      return 'one';
    } else if (two.includes(year)) {
      return 'two';
    } else {
      return 'many';
    }
  }

  if (one.includes(year % 10)) {
    return 'one';
  }

  if (two.includes(year % 10)) {
    return 'two';
  }

  return 'many';
};
