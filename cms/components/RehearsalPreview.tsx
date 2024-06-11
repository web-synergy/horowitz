import type {PreviewProps} from 'sanity'
import {useFormValue} from 'sanity'
import {Box} from '@sanity/ui'
import {ProfessorSchema} from '../schemas/objects/professor'
import {format} from 'date-fns'

export default function RehearsalPreview(props: PreviewProps) {
  const professors = useFormValue(['professors']) as ProfessorSchema[]
  const {subtitle, title} = props

  if (!subtitle || !title) {
    return <Box>{`Розклад`}</Box>
  }

  const professorName =
    professors.find((prof) => prof._key === title)?.name[0].value || 'no name found'

  let date
  try {
    date = format(new Date(subtitle as string), 'dd.MM.yyyy')
  } catch (error) {
    console.error('Invalid date:', subtitle)
    date = 'Неверная дата'
  }
  return <Box>{`Розклад для ${professorName} за ${date}`}</Box>
}
