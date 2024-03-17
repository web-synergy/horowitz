import { getHomeData } from '@/api'
import { HomeStoreState } from '@/types/storeTypes'
import { create } from 'zustand'

export const useHomeStore = create<HomeStoreState>(set => ({
  loading: false,
  requestLang: '',
  error: '',
  news: [],
  videos: [],

  fetchHome: async language => {
    set({ loading: true, requestLang: language })
    try {
      const response = await getHomeData(language)

      set({
        news: response.news,
        videos: response.videos,
      })

      set({ loading: false })
    } catch (error) {
      set({ loading: false })

      console.log(error)
    }
  },
}))
