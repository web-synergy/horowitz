import { PortableTextBlock } from '@portabletext/types'
import { IImage } from './commonTypes'
import { MainAnnualSummerSchoolTypes } from './annualSummerSchoolTypes'

export type ISummerSchool = {
  topText: PortableTextBlock[]
  bottomText: PortableTextBlock[]
  infographic: IImage | null
  gallery: { images: IImage[] }
  annualSummerSchool: MainAnnualSummerSchoolTypes[]
}
