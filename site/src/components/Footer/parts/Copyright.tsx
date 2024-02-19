import { FC } from 'react'

import { Box } from '@mui/material'
import { CopyrightTypography } from '../styled'

const Copyright: FC = () => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <Box sx={{ textAlign: 'center', marginTop: '56px' }}>
      <CopyrightTypography>
        {`© ${currentYear}. International Сompetition for Young Pianists in Memory of Vladimir Horowitz. All
        rights reserved.`}
      </CopyrightTypography>
    </Box>
  )
}

export default Copyright
