import {Select} from '@sanity/ui'
import {StringInputProps} from 'sanity'
import {useFormValue} from 'sanity'

import {ParticipantSchema} from '../schemas/objects/participant'
import {WinnerSchema} from '../schemas/objects/winners'

export const WinnerInput = (props: StringInputProps) => {
  const {elementProps} = props
  const participants = useFormValue(['participants']) as ParticipantSchema[]
  const winners = useFormValue(['winners']) as WinnerSchema[]
  const group = useFormValue(['groupType'])
  const {_key: key} = props.path[1] as {[key: string]: string}
  const currentWinner = winners.find((item) => item._key === key)
  const winnerSubgroup = currentWinner?.subgroup

  if (group !== 'junior') {
    
    return (
      <Select {...elementProps}>
        <option value=""></option>
        <option value="reject">Не присуджено</option>
        {participants.map((prof) => (
          <option value={prof._key} key={prof._key}>
            {prof.name[0].value}
          </option>
        ))}
      </Select>
    )
  }

  if (!winnerSubgroup) {
    return (
      <Select {...elementProps}>
        <option value="">Виберіть группу</option>
      </Select>
    )
  }

  const groupParticipants = participants.filter((item) => item.subgroup === winnerSubgroup)
  return (
    <Select {...elementProps}>
      <option value=""></option>
      <option value="reject">Не присуджено</option>
      {groupParticipants.map((part) => (
        <option value={part._key} key={part._key}>
          {part.name[0].value}
        </option>
      ))}
    </Select>
  )
}
