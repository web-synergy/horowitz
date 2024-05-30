import {CustomValidatorResult} from 'sanity'

const alphaChannelRegex = /^(0(\.\d{1,2})?|1(\.0{1,2})?)$/

export const validateAlphaChannel = (value: string): CustomValidatorResult => {
  if (value === '') return true

  const isNumber = alphaChannelRegex.test(value)

  if (!isNumber) {
    return {
      message: 'Значення прозорості має бути від 0 до 1: 0 - прозорий повністю, 1 не прозорий',
    }
  }
  return true
}
