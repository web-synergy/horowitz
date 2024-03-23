import { useSummerSchoolStore } from '@/store/summerSchoolStore'
import { SummerSchool } from '@/types/translation.d'
import { Container, Typography } from '@mui/material'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import PageTemplate from '../Common/PageTemplate'
import { CommonStackWrapper } from '../Common/styledComponents'

import { RegularText } from './parts/RegularText'

const SummerSchoolPage: FC = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation()

  const { topText, fetchData } = useSummerSchoolStore(state => ({
    topText: state.topText,
    fetchData: state.fetchSchoolData,
  }))

  useEffect(() => {
    fetchData(language)
  }, [language])

  if (!topText.length) return null
  console.log(topText)

  return (
    <PageTemplate>
      <Container>
        <CommonStackWrapper>
          <Typography component={'h1'} variant="h1" textAlign={'center'}>
            {t(`summerSchool.${SummerSchool.TITLE}`)}
          </Typography>
          <RegularText blocks={topText} />
        </CommonStackWrapper>
      </Container>
    </PageTemplate>
  )
}

export default SummerSchoolPage

//  ============  PARTS  ============
