import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon'
import { Box, Card, CardMedia, Container, Link, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import pianistImg from '../../temp/pianist.jpg'

const NewsSection: FC = () => {
  return (
    <Box
      component={'section'}
      sx={{
        padding: {
          xs: '72px 0',
          md: '96px 0',
          lg: '120px 0',
        },
      }}
    >
      <Box>
        <Container>
          <Stack
            sx={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '48px' }}
          >
            <Typography variant="h1">Новини</Typography>
            <Box>
              <Link component={RouterLink} to={'/'} sx={{ display: 'inline-block' }}>
                <Typography variant="bodyRegular" component={'span'}>
                  Переглянути всі
                </Typography>
                <Box
                  sx={{
                    display: 'inline-block',
                    marginLeft: '8px',
                    transform: 'translate(-2.5px, 0)',
                    rotate: '-90deg',
                  }}
                >
                  <SvgSpriteIcon icon="arrow" />
                </Box>
              </Link>
            </Box>
          </Stack>
        </Container>
        <Stack sx={{ width: '357px' }}>
          <Box component={'img'} src={pianistImg} alt="photo news" />
        </Stack>
      </Box>
    </Box>
  )
}

export default NewsSection
