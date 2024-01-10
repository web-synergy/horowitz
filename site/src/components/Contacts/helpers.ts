export const phoneNumberFormatting = (phone: string): string => {
  const pattern = /^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/gi
  return '+' + phone.replace(pattern, '$1-$2-$3-$4-$5')
}
