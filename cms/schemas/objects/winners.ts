import {defineType} from 'sanity'
import {groupList} from '../../assets/constants/groupList'
import {WinnerInput} from '../../components/WinnerInput'
import {GiPodiumWinner} from 'react-icons/gi'
import ParticipantPreview from '../../components/ParticipantPreview'

import {Value} from 'sanity-plugin-internationalized-array'

export interface WinnerSchema {
  _key: string
  subgroup: string | undefined
  champion: Value[]
  participantKey: string
}

export default defineType({
  name: 'winner',
  type: 'object',
  fields: [
    {
      name: 'subgroup',
      type: 'string',
      title: 'Група',
      options: {
        list: groupList,
      },
      hidden: ({document}) => document?.groupType !== 'junior',
    },
    {
      name: 'champion',
      title: 'Отриманий титул',
      type: 'internationalizedArrayString',
    },
    {
      name: 'participantKey',
      title: 'Переможець',
      type: 'string',
      components: {
        input: WinnerInput,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'champion[0].value',
      group: 'subgroup',
    },
    prepare: ({title, group}) => {
      const groupData = groupList.find((item) => item.value === group)
      const renderGroup = groupData ? `-${groupData.title}` : ''
      return {
        title: `${title}${renderGroup}`,
        media: GiPodiumWinner,
        group,
      }
    },
  },
  components: {
    preview: ParticipantPreview,
  },
})
