import { useSummerSchoolStore } from '@/store/summerSchoolStore'
import { SummerSchool } from '@/types/translation.d'
import { Container, Typography } from '@mui/material'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import PageTemplate from '../Common/PageTemplate'
import { CommonStackWrapper } from '../Common/styledComponents'

import ImageSection from '../About/parts/ImageSection'
import { RegularText } from './parts/RegularText'

const SummerSchoolPage: FC = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation()

  const { topText, fetchData, infographicImg } = useSummerSchoolStore(state => ({
    topText: state.topText,
    fetchData: state.fetchSchoolData,
    infographicImg: state.infographic,
  }))

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
        </CommonStackWrapper>
      </Container>
    </PageTemplate>
  )
}

export default SummerSchoolPage

//  ============  PARTS  ============
