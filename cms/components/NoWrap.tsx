import type {BlockDecoratorProps} from 'sanity'
export default function NoWrap(props: BlockDecoratorProps) {
  return <span style={{textWrap: 'nowrap', background: '#F5F5F5'}}>{props.children}</span>
}
