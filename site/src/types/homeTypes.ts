import { IVideo } from './commonTypes'
import { INews } from './newsTypes'

export interface HomeData {
  news: INews[]
  videos: IVideo[]
}
