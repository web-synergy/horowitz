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
  // Парсимо дату з рядка
  const parsedDate = new Date(inputDate);

  // Отримуємо день, місяць та рік
  const day = parsedDate.getDate().toString().padStart(2, '0');
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0'); // Місяці у JavaScript починаються з 0
  const year = parsedDate.getFullYear().toString();

  // Форматуємо результат
  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate;
};

export function processImageUrl(url: string) {
  const parts = url.split('?');

  const firstPart = parts[0];

  const modifiedUrl = parts.length > 1 ? `${firstPart}?${parts[1]}` : firstPart;

  return modifiedUrl;
}

export const sliceNewsTitle = (title: string, sliceIndex: number): string =>
  title.slice(0, sliceIndex) + '...'
