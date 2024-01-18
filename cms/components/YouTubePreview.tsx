import type {PreviewProps} from 'sanity'
import {Flex, Text} from '@sanity/ui'
import YouTubePlayer from 'react-player/youtube'

interface PreviewYouTubeProps extends PreviewProps {
  url: string
}

export function YouTubePreview(props: PreviewYouTubeProps) {
  const {url} = props

  return (
    <Flex padding={3} justify={'center'}>
      {url ? <YouTubePlayer height={200} url={url} /> : <Text>Додати посилання на відео</Text>}
    </Flex>
  )
}
