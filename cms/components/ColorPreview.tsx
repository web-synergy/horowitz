import type {PreviewProps} from 'sanity'
import {ColorValue} from '@sanity/color-input'
import {Box, Text, Flex} from '@sanity/ui'

interface ColorPreviewProps extends PreviewProps {
  color: ColorValue
  title: string
}

export default function ColorPreview(props: ColorPreviewProps) {
  const color = props.color?.hex ?? '#cecece'
  return (
    <Flex align="center" gap={2}>
      <Box style={{borderRadius: '50%', width: 30, height: 30, backgroundColor: color}}></Box>
      <Text>{props.title}</Text>
    </Flex>
  )
}
