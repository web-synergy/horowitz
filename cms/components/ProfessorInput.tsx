import {Select} from '@sanity/ui'
import {StringInputProps} from 'sanity'
import {useFormValue} from 'sanity'
import {ProfessorSchema} from '../schemas/objects/professor'

export const ProfessorInput = (props: StringInputProps) => {
  const {elementProps} = props
  const professors = useFormValue(['professors']) as ProfessorSchema[]

  return (
    <Select {...elementProps}>
      <option value=""></option>
      {professors.map((prof) => (
        <option value={prof._key} key={prof._key}>
          {prof.name[0].value}
        </option>
      ))}
    </Select>
  )
}
