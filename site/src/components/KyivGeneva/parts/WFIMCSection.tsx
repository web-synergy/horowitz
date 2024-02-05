import { Routes } from '@/types/routes.d'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Caption, StyledButton } from './styled'

type WFIMCSectionProps = {
  image: string
  wfimc_content: {
    about: Array<string>
    photoCaption: string
  }
}

const WFIMCSection: FC<WFIMCSectionProps> = ({ image, wfimc_content: { about, photoCaption } }) => {
  return (
    <Container>
      <Typography variant="h1" sx={{ marginBottom: { xs: '24px', lg: '48px' } }}>
        WFIMC
      </Typography>
      <Stack
        sx={{
          flexDirection: {
            xs: 'column',
            lg: 'row',
          },
          gap: '24px',
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              lg: 'calc(50% - 12px)',
            },
          }}
        >
          <Box
            component={'img'}
            src={image}
            sx={{ display: 'block', width: '100%', height: '100%' }}
          />
          <Caption component={'p'}>{photoCaption}</Caption>
        </Box>
        <Box
          position={'relative'}
          sx={{
            width: {
              xs: '100%',
              lg: 'calc(50% - 12px)',
            },
          }}
        >
          <Typography variant="bodyRegular" component={'p'} sx={{ textAlign: 'justify' }}>
            {about[0]}
          </Typography>
          <StyledButton
            variant="secondary"
            component={Link}
            to={`/${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_WFIMC}`}
          >
            Показати більше
          </StyledButton>
        </Box>
      </Stack>
    </Container>
  )
}

export default WFIMCSection
