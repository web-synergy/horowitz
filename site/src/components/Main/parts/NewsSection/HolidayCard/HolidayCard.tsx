import { Box } from '@mui/material'
import { FC } from 'react'

interface HolidayCardProps {
  src: string
}

const HolidayCard: FC<HolidayCardProps> = ({ src }) => {
  return (
    <Box component={'section'} sx={{ lineHeight: 0 }}>
      <Box
        component={'img'}
        src={src}
        alt="holiday card"
        sx={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Box>
  )
}

export default HolidayCard
