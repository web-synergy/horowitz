import type {PreviewProps} from 'sanity'
import './color.css'

interface PreviewColorText extends PreviewProps {
  value: string
}

export default function ColorText(props: PreviewColorText) {
  const color = props.value
  console.log(color)

  return (
    <span className="colorText">
      Color
      {/* {props.renderDefault(props)} */}
    </span>
  )
}
