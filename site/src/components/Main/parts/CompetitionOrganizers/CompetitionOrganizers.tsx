import { Box, Container, Stack } from '@mui/material'
import { FC } from 'react'

import logo5 from '../../temp/organizers/academyGliyera_logo.png'
import logo3 from '../../temp/organizers/departmentСulture_logo.png'
import logo4 from '../../temp/organizers/horowitz_logo.png'
import logo1 from '../../temp/organizers/minCult_logo.png'
import logo2 from '../../temp/organizers/stateAgency_logo.png'
import { MainTitle } from '../WatchOnline/styled'

const CompetitionOrganizers: FC = () => {
  const logotypes = [logo1, logo2, logo3, logo4, logo5]

  return (
    <Box
      component={'section'}
      sx={{
        marginBottom: {
          xs: '72px',
          md: '96px',
          lg: '120px',
        },
      }}
    >
      <Container>
        <MainTitle component={'h2'} sx={{ marginBottom: '48px', textAlign: 'center' }}>
          Організатори конкурсу
        </MainTitle>
        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: {
              xs: 'center',
              md: 'center',
              lg: 'space-between',
            },
            alignItems: 'center',
            flexWrap: 'wrap',
            columnGap: '12px',
            rowGap: '48px',
          }}
        >
          {logotypes.map((logo, i) => (
            // <Box key={i} sx={{ height: '92px' }}>
            <Box
              key={i}
              component={'img'}
              src={logo}
              alt={'logo image'}
              sx={{ maxWidth: '100%', maxHeight: '92px' }}
            />
            // </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default CompetitionOrganizers
