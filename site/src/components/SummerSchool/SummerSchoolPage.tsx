import { useSummerSchoolStore } from '@/store/summerSchoolStore'
import { SummerSchool } from '@/types/translation.d'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { Container, Typography } from '@mui/material'
import ImageSection from '../About/parts/ImageSection'
import Loader from '../Common/Loader'
import PageTemplate from '../Common/PageTemplate'
import { CommonStackWrapper } from '../Common/styledComponents'
import ButtonsArea from './parts/ButtonsArea'
import ImagesArea from './parts/ImagesArea'
import { RegularText } from './parts/RegularText'
import { StyledBox } from './parts/styled'

const SummerSchoolPage: FC = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation()

  const {
    topText,
    bottomText,
    fetchData,
    infographicImg,
    gallery,
    requestLang,
    isLoading,
    annualSummerSchool,
  } = useSummerSchoolStore(state => ({
    topText: state.topText,
    fetchData: state.fetchSchoolData,
    infographicImg: state.infographic,
    bottomText: state.bottomText,
    gallery: state.gallery.images,
    requestLang: state.requestLang,
    isLoading: state.isLoading,
    annualSummerSchool: state.annualSummerSchool,
  }))

  useEffect(() => {
    if (requestLang === language) return
    fetchData(language)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])

  if (isLoading) return <Loader />
  if (!requestLang.length) return null

  return (
    <PageTemplate>
      <Container>
        <CommonStackWrapper>
          <Typography component={'h1'} variant="h1" textAlign={'center'}>
            {t(`summerSchool.${SummerSchool.TITLE}`)}
          </Typography>
          <RegularText blocks={topText} />
          {infographicImg && <ImageSection image={infographicImg} />}
          <RegularText blocks={bottomText} />

          <StyledBox>
            <ButtonsArea btnsList={annualSummerSchool} />
          </StyledBox>

          <ImagesArea gallery={gallery} />
        </CommonStackWrapper>
      </Container>
    </PageTemplate>
  )
}

export default SummerSchoolPage
