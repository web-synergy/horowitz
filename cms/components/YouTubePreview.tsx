import type {PreviewProps} from 'sanity'
import {Button, Flex, Text} from '@sanity/ui'
import YouTubePlayer from 'react-player/youtube'

interface PreviewYouTubeProps extends PreviewProps {
  url: string
}

export function YouTubePreview(props: PreviewYouTubeProps) {
  const {url} = props

  return (
    <Flex padding={4} justify={'center'}>
      <Flex padding={1} justify={'center'}>
        {url ? <YouTubePlayer height={200} url={url} /> : <Text>Додати посилання на відео</Text>}
      </Flex>
    </Flex>
  )
}
