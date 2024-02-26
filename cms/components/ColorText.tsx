import {ColorValue} from '@sanity/color-input'
import type {PreviewProps} from 'sanity'

interface PreviewColorText extends PreviewProps {
  value: {
    color: ColorValue
  }
}

export default function ColorText(props: PreviewColorText) {
  const color = props.value?.color?.hex

  return <span style={{textDecoration: 'underline', color}}>{props.renderDefault(props)}</span>
}
