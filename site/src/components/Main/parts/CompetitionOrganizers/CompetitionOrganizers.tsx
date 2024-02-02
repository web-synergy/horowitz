import { FC } from 'react'

import { LogotypesStack, Wrapper } from './styled'

import { MainPage } from '@/types/translation.d'
import { Box, Container } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { MainTitle } from '../../styled'

import { urlFor } from '@/config/sanity/imageUrl'
import { usePartnersStore } from '@/store'

const CompetitionOrganizers: FC = () => {
  const { t } = useTranslation()

  const organizers = usePartnersStore(state => state.organizers)
  if (!organizers) return null

  return (
    <Wrapper component={'section'}>
      <Container>
        <MainTitle component={'h2'} sx={{ marginBottom: '48px', textAlign: 'center' }}>
          {t(`mainPage.${MainPage.ORGANIZERS}`)}
        </MainTitle>
        <LogotypesStack>
          {organizers.map(organizer => (
            <Box
              key={organizer._key}
              component={'img'}
              sx={{
                maxWidth: {
                  xs: '100%',
                  md: '232px',
                  lg: '480px',
                },
                maxHeight: '90px',
              }}
              src={organizer.img?.asset && urlFor(organizer.img).url().toString()}
              alt={organizer.title}
            />
          ))}
        </LogotypesStack>
      </Container>
    </Wrapper>
  )
}

export default CompetitionOrganizers
