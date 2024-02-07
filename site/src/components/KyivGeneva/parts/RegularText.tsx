import { Typography } from '@mui/material'
import { FC } from 'react'

type RegularTextProps = {
  chapter: string
}

const RegularText: FC<RegularTextProps> = ({ chapter }) => {
  return (
    <Typography
      variant="bodyRegular"
      component={'p'}
      sx={{
        textAlign: 'justify',
        width: { xs: '100%', lg: 'calc(50% - 12px)' },
      }}
    >
      {chapter}
    </Typography>
  )
}

export default RegularText
