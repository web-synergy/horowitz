import { SummerSchool } from '@/types/translation.d'
import { Container, Typography } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import PageTemplate from '../Common/PageTemplate'
import { CommonStackWrapper } from '../Common/styledComponents'

const SummerSchoolPage: FC = () => {
  const { t } = useTranslation()

  return (
    <PageTemplate>
      <Container>
        <CommonStackWrapper>
          <Typography component={'h1'} variant="h1" textAlign={'center'}>
            {t(`summerSchool.${SummerSchool.TITLE}`)}
          </Typography>
        </CommonStackWrapper>
      </Container>
    </PageTemplate>
  )
}

export default SummerSchoolPage
