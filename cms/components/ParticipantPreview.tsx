import {FC} from 'react'
import {PreviewProps} from 'sanity'
import {Box, Flex, Badge} from '@sanity/ui'
import {groupList} from '../assets/constants/groupList'

type ParticipantPreviewProps = PreviewProps & {
  group?: string
}
const ParticipantPreview: FC<PreviewProps> = (props) => {
  const participantProps = props as ParticipantPreviewProps

  const group = participantProps.group
  const groupData = groupList.find((item) => item.value === group)

  if (!groupData) {
    return props.renderDefault(props)
  }

  return (
    <Flex
      style={{backgroundColor: groupData.color}}
      direction={'row'}
      align="center"
      justify={'space-between'}
    >
      <Box>{props.renderDefault(props)}</Box>
      <Badge padding={2} tone="primary" marginRight={1}>
        {groupData.title}
      </Badge>
    </Flex>
  )
}

export default ParticipantPreview
