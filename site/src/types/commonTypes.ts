export interface IImage {
  alt: string
  aspectRatio: number
  width: number
  isEmbed: boolean
  position: string
  embedPosition: string

  asset: {
    _ref: string
  }
  _key: string
}

export type IVideo = {
  img: IImage
  link: string
  title: string
  _key: string
  _type: string
}
