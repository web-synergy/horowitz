import { FC } from 'react'

import { Box } from '@mui/material'
import { CopyrightTypography } from '../styled'

const Copyright: FC = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: '56px' }}>
      <CopyrightTypography>
        © 2024, International Сompetition for Young Pianists in Memory of Vladimir Horowitz, All
        right reserved.
      </CopyrightTypography>
    </Box>
  )
}

export default Copyright
