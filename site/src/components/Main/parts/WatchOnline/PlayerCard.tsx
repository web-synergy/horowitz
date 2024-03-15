import DisplayVideoCard from '@/components/Templates/DisplayVideoCard/DisplayVideoCard'
import { IImage } from '@/types/commonTypes'
import { Stack, Typography } from '@mui/material'
import { FC } from 'react'

interface PlayerCardProps {
  link: string

  title: string
  img: IImage
}

const PlayerCard: FC<PlayerCardProps> = ({ link, title, img }) => {
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
        height: '100%',
      }}
    >
      <DisplayVideoCard link={link} poster={img} />
      <Typography variant="subhead" sx={{ marginTop: 'auto' }}>
        {title}
      </Typography>
    </Stack>
  )
}

export default PlayerCard
