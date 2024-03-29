import { getSummerSchoolData } from '@/api'
import { ISummerSchool } from '@/types/summerSchoolTypes'
import { create } from 'zustand'

interface SummerSchoolState extends ISummerSchool {
  requestLang: string
  isLoading: boolean
  fetchSchoolData: (language: string) => Promise<void>
}

export const useSummerSchoolStore = create<SummerSchoolState>()(set => ({
  topText: [],
  bottomText: [],
  infographic: null,
  gallery: { images: [] },
  requestLang: '',
  isLoading: false,
  annualSummerSchool: {
    button: '',
    year: '',
    applicationLink: '',
    isActive: false,
    slug: {
      current: '',
    },
  },

  fetchSchoolData: async (language: string) => {
    set({ isLoading: true })
    try {
      const resp = await getSummerSchoolData(language)

      if (!resp) throw new Error('Could not fetch the data from that resource')

      set({ ...resp, requestLang: language, isLoading: false })

      // console.log(resp)
    } catch (error) {
      set({ isLoading: false })
      console.log(error)
    }
  },
}))
