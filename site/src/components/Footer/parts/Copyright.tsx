import { Box, Typography } from '@mui/material'
import { FC } from 'react'

const Copyright: FC = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: '56px', color: theme => theme.palette.neutral[30] }}>
      <Typography variant="caption">
        © 2024, International Сompetition for Young Pianists in Memory of Vladimir Horowitz, All
        right reserved.
      </Typography>
    </Box>
  )
}

export default Copyright
