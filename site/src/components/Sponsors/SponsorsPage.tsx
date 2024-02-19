import { usePartnersStore } from '@/store/partnersStore'
import { Sponsors } from '@/types/translation.d'
import { Container, Stack } from '@mui/material'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import PageTemplate from '../Common/PageTemplate'

import { Routes } from '@/types/routes.d'
import GoBackBtn from '../Common/GoBackBtn'
import LogotypesGallery from './parts/LogotypesGallery'
import { MainTitle, TwoGalleryStack } from './styled'

const SponsorsPage: FC = () => {
  const fetchData = usePartnersStore(state => state.fetchPartners)
  const {
    organizers,
    mainPartners,
    sponsors,
    generalInfoPartners,
    partners,
    mainInfoPartners,
    officialInfoPartners,
    requestLang,
  } = usePartnersStore()

  const {
    t,
    i18n: { language },
  } = useTranslation()

  useEffect(() => {
    if (requestLang === language) return
    fetchData(language)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])

  return (
    <PageTemplate>
      <Container sx={{ py: { xs: 9, md: 12 }, paddingBottom: { lg: 15 } }}>
        <MainTitle component={'h1'}>{t(`sponsorsPage.${Sponsors.MAIN_TITLE}`)}</MainTitle>
        <Stack spacing={6}>
          {organizers && (
            <LogotypesGallery title={t(`sponsorsPage.${Sponsors.COMP_ORG}`)} gallery={organizers} />
          )}
          <TwoGalleryStack>
            {mainPartners && (
              <LogotypesGallery
                title={t(`sponsorsPage.${Sponsors.MAIN_PART}`)}
                gallery={mainPartners}
              />
            )}
            {sponsors && (
              <LogotypesGallery title={t(`sponsorsPage.${Sponsors.SPONSORS}`)} gallery={sponsors} />
            )}
          </TwoGalleryStack>
          {generalInfoPartners && (
            <LogotypesGallery
              title={t(`sponsorsPage.${Sponsors.GEN_INFO_PART}`)}
              gallery={generalInfoPartners}
            />
          )}
          <TwoGalleryStack>
            {partners && (
              <LogotypesGallery title={t(`sponsorsPage.${Sponsors.PARTNERS}`)} gallery={partners} />
            )}
            {mainInfoPartners && (
              <LogotypesGallery
                title={t(`sponsorsPage.${Sponsors.MAIN_INFO_PART}`)}
                gallery={mainInfoPartners}
              />
            )}
          </TwoGalleryStack>
          {officialInfoPartners && (
            <LogotypesGallery
              title={t(`sponsorsPage.${Sponsors.OFF_INFO_PART}`)}
              gallery={officialInfoPartners}
            />
          )}
        </Stack>
      </Container>
      <GoBackBtn href={Routes.HOME} />
    </PageTemplate>
  )
}
export default SponsorsPage
