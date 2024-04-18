import {Value} from 'sanity-plugin-internationalized-array'
import {CustomValidatorResult} from 'sanity'

export const validateInternationalizedArray = (value: Value[]): CustomValidatorResult => {
  if (value.length < 2) {
    return 'Внесіть дані для всіх мов'
  }

  const emptyValues = value.filter((item) => !item.value)

  if (emptyValues.length > 0) {
    const paths = emptyValues.map((item) => [{_key: item._key}, 'value'])

    return {message: 'Не внесене значення', paths: paths}
  }

  return true
}
