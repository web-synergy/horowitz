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

import btn1 from '@/assets/images/buttonsBg/variant1.jpg'
import btn2 from '@/assets/images/buttonsBg/variant2.jpg'
import btn3 from '@/assets/images/buttonsBg/variant3.jpg'

const buttonsBg = [
  { title: '1', image: btn1 },
  { title: '2', image: btn2 },
  { title: '3', image: btn3 },
]

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

  const currBg = buttonsBg.length
    ? buttonsBg.filter(bg => bg.title === annualSummerSchool.button).pop()
    : undefined
  const restBgs = buttonsBg.filter(bg => bg.title !== annualSummerSchool.button)

  console.log(currBg)

  useEffect(() => {
    if (requestLang === language) return
    fetchData(language)
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
          <ButtonsArea currentBg={currBg?.image} restBgs={restBgs} />
          <ImagesArea gallery={gallery} />
        </CommonStackWrapper>
      </Container>
    </PageTemplate>
  )
}

export default SummerSchoolPage

//  ============  PARTS  ============
