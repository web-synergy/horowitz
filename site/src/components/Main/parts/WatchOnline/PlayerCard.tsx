import { Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { Iframe } from './styled'

interface PlayerCardProps {
  url: string
  title: string
}

const PlayerCard: FC<PlayerCardProps> = ({ url, title }) => {
  return (
    <Stack
      sx={{
        gap: {
          xs: '16px',
          md: '24px',
        },
        width: {
          xs: '247px',
          md: '332px',
          lg: '357px',
        },
      }}
    >
      <Iframe
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        sandbox="allow-scripts allow-presentation allow-same-origin allow-popups"
      />
      <Typography
        sx={{
          fontSize: {
            xs: '1rem',
            md: '1.375rem',
            lg: '1.5rem',
          },
          lineHeight: {
            xs: 1.5,
            md: 1.36,
            lg: 1.33,
          },
        }}
      >
        {title}
      </Typography>
    </Stack>
  )
}

export default PlayerCard
