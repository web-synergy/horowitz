export const phoneNumberFormatting = (
  phone: string,
  phoneLength?: number
): string => {
  const pattern = /^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/gi;
  phone = phone.replace(pattern, '$1-$2-$3-$4-$5');
  if (phoneLength) return phone.slice(phoneLength);
  else return '+' + phone;
};

export const parseAndFormatDate = (inputDate: string): string => {
  const [year, month, day] = inputDate.split('-');
  return `${day}.${month}.${year}`;
};

export function processImageUrl(url: string) {
  const parts = url.split('?');

  const firstPart = parts[0];

  const modifiedUrl = parts.length > 1 ? `${firstPart}?${parts[1]}` : firstPart;

  return modifiedUrl;
}

export const sliceNewsTitle = (title: string, sliceIndex: number): string => {
  return title.length > sliceIndex ? title.slice(0, sliceIndex) + '...' : title;
};
