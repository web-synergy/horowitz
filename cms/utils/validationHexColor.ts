import {CustomValidatorResult} from 'sanity'

const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
export const validateHexColor = (value: string): CustomValidatorResult => {
  if (value === '') return true
  const isStringColor = hexColorRegex.test(value)

  if (!isStringColor) {
    return {message: 'Введіть колір в форматі hex. Наприклад: #000000'}
  }
  return true
}
