import DisplayVideoCard from '@/components/Templates/DisplayVideoCard/DisplayVideoCard'
import { IImage } from '@/types/commonTypes'
import { getPosterLink } from '@/utils/helpers'
import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { FC } from 'react'

interface PlayerCardProps {
  link: string
  title: string
  img: IImage
}

const PlayerCard: FC<PlayerCardProps> = ({ link, title }) => {
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.only('md'))
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const posterLink = getPosterLink(link, isTablet, isMobile)

  return (
    <Stack
      sx={{
        gap: {
          xs: 2,
          md: 3,
        },
        width: {
          xs: '247px',
          md: '332px',
          lg: '357px',
        },
        height: '100%',
      }}
    >
      <DisplayVideoCard link={link} poster={posterLink} />
      <Typography variant="subhead" sx={{ marginTop: 'auto' }}>
        {title}
      </Typography>
    </Stack>
  )
}

export default PlayerCard
