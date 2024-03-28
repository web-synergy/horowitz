import {ColorValue} from '@sanity/color-input'
import type {PreviewProps} from 'sanity'
import './color.css'

interface PreviewColorText extends PreviewProps {
  value: {
    color: ColorValue
  }
}

export default function ColorText(props: PreviewColorText) {
  const color = props.value?.color?.hex
  const styles = {
    color,
  }

  return (
    <span className="colorText" style={styles}>
      {props.renderDefault(props)}
    </span>
  )
}
