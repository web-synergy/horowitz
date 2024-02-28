import { Stack, useScrollTrigger } from '@mui/material'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet, useLocation, useSearchParams } from 'react-router-dom'
import { draft, lang } from '../../libs/searchParamsKey'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import { settingsQuery } from '@/api/query'
import { useSettingsStore } from '@/store/settingStore'
import { useLiveQuery } from '@sanity/preview-kit'
import ScrollUpBtn from './ScrollUpBtn'

const SharedLayout = () => {
  const {
    i18n: { language },
  } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()

  const langParam = searchParams.get(lang)
  const draftMod = searchParams.get(draft)
  const { contacts, fetchSettings, getPreviewSettings, requestLang } = useSettingsStore()

  const [data] = useLiveQuery(null, settingsQuery, {
    language,
  })

  const scrollTrigger = useScrollTrigger({
    threshold: innerHeight * 2,
    disableHysteresis: true,
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    if (data) {
      getPreviewSettings(data, language)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, data])

  useEffect(() => {
    if (requestLang === language) return
    fetchSettings(language)
  }, [contacts, fetchSettings, language, draftMod])

  useEffect(() => {
    const needChangeParams = !langParam || langParam !== language
    if (needChangeParams) {
      setSearchParams(
        prev => {
          prev.set(lang, language)
          return prev
        },
        { replace: true }
      )
    }
  }, [langParam, language, searchParams, setSearchParams])

  return (
    <Stack minHeight="100vh">
      <Header />
      <Stack component="main" minHeight="100%" flex="1 1 auto">
        <Outlet />
      </Stack>
      <ScrollUpBtn visibility={scrollTrigger} />
      <Footer />
    </Stack>
  )
}

export default SharedLayout
