export const phoneNumberFormatting = (phone: string, phoneLength?: number): string => {
  const pattern = /^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/gi
  phone = phone.replace(pattern, '$1-$2-$3-$4-$5')
  if (phoneLength) return phone.slice(phoneLength)
  else return '+' + phone
}
