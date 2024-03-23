import { getSummerSchoolData } from '@/api'
import { ISummerSchool } from '@/types/summerSchoolTypes'
import { create } from 'zustand'

interface SummerSchoolState extends ISummerSchool {
  fetchSchoolData: (language: string) => Promise<void>
}

export const useSummerSchoolStore = create<SummerSchoolState>()(set => ({
  topText: [],
  bottomText: [],
  infographic: null,

  fetchSchoolData: async (language: string) => {
    try {
      const resp = await getSummerSchoolData(language)

      if (!resp) throw new Error('Could not fetch the data from that resource')

      set({ ...resp })

      // console.log(resp)
    } catch (error) {
      console.log(error)
    }
  },
}))
