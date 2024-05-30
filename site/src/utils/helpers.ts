export const phoneNumberFormatting = (
  phone: string,
  phoneLength?: number
): string => {
  const pattern = /^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/gi;
  phone = phone.replace(pattern, "$1-$2-$3-$4-$5");
  if (phoneLength) return phone.slice(phoneLength);
  else return "+" + phone;
};

export const parseAndFormatDate = (dateString: string): string => {
  if (!dateString) return "";
  const dateObject: Date = new Date(dateString);
  const day: number = dateObject.getUTCDate();
  const month: number = dateObject.getUTCMonth() + 1;
  const year: number = dateObject.getUTCFullYear();

  const formattedDate: string = `${day.toString().padStart(2, "0")}.${month
    .toString()
    .padStart(2, "0")}.${year}`;

  return formattedDate;
};

export const sliceNewsTitle = (title: string, sliceIndex: number): string => {
  return title?.length > sliceIndex
    ? title.slice(0, sliceIndex) + "..."
    : title;
};

export const getPosterId = (link: string): string | undefined => {
  const pattern = /youtube\.com.*(\?v=|\/embed\/)(.{11})/;
  return link.match(pattern)?.pop();
};

export const getPosterLink = (
  YTLink: string,
  isTablet: boolean,
  isMobile: boolean
): string => {
  const posterId = getPosterId(YTLink);

  if (isTablet) return `https://img.youtube.com/vi/${posterId}/mqdefault.jpg`;
  if (isMobile) return `https://img.youtube.com/vi/${posterId}/sddefault.jpg`;

  return `https://img.youtube.com/vi/${posterId}/hqdefault.jpg`;
};

export const getMasterClassPosterId = (link: string): string | undefined => {
  const pattern =
    /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  return link.match(pattern)?.[1];
};

export const getMasterClassPosterLink = (YTLink: string): string => {
  const posterId = getMasterClassPosterId(YTLink);

  if (YTLink) return `https://img.youtube.com/vi/${posterId}/maxresdefault.jpg`;

  return `https://img.youtube.com/vi/${posterId}/hqdefault.jpg`;
};
