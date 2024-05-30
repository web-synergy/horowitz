import type {PreviewProps} from 'sanity'
import {Box, Text, Flex} from '@sanity/ui'

interface ColorPreviewProps extends PreviewProps {
  color: string
  title: string
  alpha: number
}

export default function ColorPreview(props: ColorPreviewProps) {
  const {color, title, alpha} = props

  return (
    <Flex align="center" gap={2}>
      <Box
        style={{borderRadius: '50%', width: 30, height: 30, backgroundColor: color, opacity: alpha}}
      ></Box>
      <Text>{title}</Text>
    </Flex>
  )
}
