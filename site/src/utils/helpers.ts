export const phoneNumberFormatting = (
  phone: string,
  phoneLength?: number
): string => {
  const pattern = /^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/gi;
  phone = phone.replace(pattern, '$1-$2-$3-$4-$5');
  if (phoneLength) return phone.slice(phoneLength);
  else return '+' + phone;
};

export const parseAndFormatDate = (dateString: string): string => {
  const dateObject: Date = new Date(dateString);
  const day: number = dateObject.getUTCDate();
  const month: number = dateObject.getUTCMonth() + 1;
  const year: number = dateObject.getUTCFullYear();

  const formattedDate: string = `${day.toString().padStart(2, '0')}.${month
    .toString()
    .padStart(2, '0')}.${year}`;

  return formattedDate;
};

export const sliceNewsTitle = (title: string, sliceIndex: number): string => {
  return title?.length > sliceIndex
    ? title.slice(0, sliceIndex) + '...'
    : title;
};
