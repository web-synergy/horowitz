import type {PreviewProps} from 'sanity'
import {Box} from '@sanity/ui'

interface TitlePreviewProps extends PreviewProps {
  title: string
}

export default function TitlePreview(props: TitlePreviewProps) {
  const title = props.schemaType?.title || ''
  return <Box>{title}</Box>
}
