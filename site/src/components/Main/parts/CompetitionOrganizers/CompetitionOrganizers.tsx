import { Box, Container } from '@mui/material'
import { FC } from 'react'

import logo5 from '../../temp/organizers/academyGliyera_logo.png'
import logo3 from '../../temp/organizers/departmentСulture_logo.png'
import logo4 from '../../temp/organizers/horowitz_logo.png'
import logo1 from '../../temp/organizers/minCult_logo.png'
import logo2 from '../../temp/organizers/stateAgency_logo.png'

import { MainTitle } from '../WatchOnline/styled'
import { LogotypesStack, Wrapper } from './styled'

import { MainPage } from '@/types/translation.d'
import { useTranslation } from 'react-i18next'

const CompetitionOrganizers: FC = () => {
  // !temp
  const logotypes = [logo1, logo2, logo3, logo4, logo5]

  const { t } = useTranslation()

  return (
    <Wrapper component={'section'}>
      <Container>
        <MainTitle component={'h2'} sx={{ marginBottom: '48px', textAlign: 'center' }}>
          {t(`mainPage.${MainPage.ORGANIZERS}`)}
        </MainTitle>
        <LogotypesStack>
          {logotypes.map((logo, i) => (
            <Box
              key={i}
              component={'img'}
              src={logo}
              alt={'logo image'}
              sx={{ maxWidth: '288px', maxHeight: '92px' }}
            />
          ))}
        </LogotypesStack>
      </Container>
    </Wrapper>
  )
}

export default CompetitionOrganizers
