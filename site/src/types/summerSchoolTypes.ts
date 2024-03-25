import { PortableTextBlock } from '@portabletext/types'
import { IImage } from './commonTypes'

export type ISummerSchool = {
  topText: PortableTextBlock[]
  bottomText: PortableTextBlock[]
  infographic: IImage | null
  gallery: { images: IImage[] }
}
