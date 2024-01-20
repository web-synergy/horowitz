import { Box, Stack } from '@mui/material'
import { FC } from 'react'
import { CardTitle } from '../HeroSection/styled'
import ShowMoreBtn from './ShowMoreBtn'

interface NewsCardProps {
  title: string
  image: string
  link: string
}

const NewsCard: FC<NewsCardProps> = ({ image, title, link }) => {
  return (
    <Stack
      sx={{
        maxWidth: {
          xs: '247px',
          md: '332px',
          lg: '357px',
        },
        gap: {
          xs: '16px',
          md: '24px',
        },
      }}
    >
      <Box component={'img'} src={image} alt="news photo" />
      <CardTitle>{title}</CardTitle>
      <Box>
        <ShowMoreBtn title="Читати більше" link={link} />
      </Box>
    </Stack>
  )
}

export default NewsCard
