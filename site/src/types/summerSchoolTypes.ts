import { PortableTextBlock } from '@portabletext/types'
import { IImage } from './commonTypes'

type AnnualSummerSchoolTypes = {
  button: string
  isActive: boolean
  applicationLink: string | null
  slug: {
    current: string
  }
}

export type ISummerSchool = {
  topText: PortableTextBlock[]
  bottomText: PortableTextBlock[]
  infographic: IImage | null
  gallery: { images: IImage[] }
  annualSummerSchool: AnnualSummerSchoolTypes
}
