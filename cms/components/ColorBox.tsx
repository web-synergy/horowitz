import type {PreviewProps} from 'sanity'
import {Box, Flex, Text} from '@sanity/ui'
import {ColorValue} from '@sanity/color-input'

interface ColorBoxPreviewProps extends PreviewProps {
  color: ColorValue
  position: number
}

export function ColorBoxPreview(props: ColorBoxPreviewProps) {
  const {
    color: {
      hex,
      rgb: {a},
    },
    position,
  } = props

  return (
    <Flex padding={4} justify={'flex-start'} align="center">
      <Box
        style={{
          backgroundColor: hex,
          opacity: a,
          width: 30,
          height: 30,
          borderRadius: '50%',
          marginRight: 8,
          border: '1px solid #000',
        }}
      ></Box>
      <Text>Color start: {position}%</Text>
    </Flex>
  )
}
