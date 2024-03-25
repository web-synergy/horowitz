import { useSummerSchoolStore } from '@/store/summerSchoolStore'
import { SummerSchool } from '@/types/translation.d'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { Container, Typography } from '@mui/material'
import ImageSection from '../About/parts/ImageSection'
import PageTemplate from '../Common/PageTemplate'
import { CommonStackWrapper } from '../Common/styledComponents'
import ImagesArea from './parts/ImagesArea'
import { RegularText } from './parts/RegularText'

const SummerSchoolPage: FC = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation()

  const { topText, bottomText, fetchData, infographicImg, gallery } = useSummerSchoolStore(
    state => ({
      topText: state.topText,
      fetchData: state.fetchSchoolData,
      infographicImg: state.infographic,
      bottomText: state.bottomText,
      gallery: state.gallery.images,
    })
  )

  useEffect(() => {
    fetchData(language)
  }, [language])

  if (!topText.length) return null

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
          <ImagesArea gallery={gallery} />
        </CommonStackWrapper>
      </Container>
    </PageTemplate>
  )
}

export default SummerSchoolPage

//  ============  PARTS  ============
