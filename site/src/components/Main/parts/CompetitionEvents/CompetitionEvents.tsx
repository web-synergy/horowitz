import { Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import { FC } from 'react'

import { Link as RouterLink } from 'react-router-dom'
import bg_image from '../../temp/CompetitionEvents_bg.jpg'

const CompetitionEvents: FC = () => {
  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('md'))

  const buttonTitle = isMobile ? 'Дивитись трансляцію' : 'Дивитись онлайн-трансляцію'

  return (
    <Box
      component={'section'}
      sx={{
        background: `url(${bg_image}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: {
          xs: '72px 0',
          md: '80px 0',
          lg: '120px 0',
        },
        color: theme => theme.palette.common.white,
      }}
    >
      <Container>
        <Typography
          variant="subhead"
          component={'p'}
          sx={{ color: theme => theme.palette.primary.main, marginBottom: 1.5 }}
        >
          Події конкурсу
        </Typography>
        <Typography
          variant="h2"
          component={'h2'}
          sx={{
            maxWidth: {
              xs: '100%',
              md: '530px',
            },
            fontSize: {
              xs: '1.5rem',
              md: '2.25rem',
              lg: '2.625rem',
            },
          }}
        >
          Концерт-присвята Володимиру Горовицю
        </Typography>
        <Typography
          component={'p'}
          variant="bodyRegular"
          sx={{
            margin: '32px 0',
            width: {
              xs: '100%',
              md: '548px',
            },
            textAlign: 'justify',
          }}
        >
          Конкурс Горовиця Київ-Женева та VERE MUSIC FUND представляють концерт пам'яті видатного
          піаніста усіх часів: Володимира Горовиця. Четверо відомих лауреатів конкурсу виконають
          програму з репертуару Маестро.
        </Typography>
        <Button
          component={RouterLink}
          to={'/'}
          target="_blank"
          sx={{
            '&.MuiButton-root': {
              padding: '16px 32px',
            },
            width: {
              xs: '288px',
              md: '336px',
            },
            height: '60px',
          }}
        >
          {buttonTitle}
        </Button>
      </Container>
    </Box>
  )
}

export default CompetitionEvents
