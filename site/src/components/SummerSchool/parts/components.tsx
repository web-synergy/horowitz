import { Typography } from '@mui/material'
import { PortableTextComponents } from '@portabletext/react'

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Typography
        variant="bodyRegular"
        component={'p'}
        sx={{
          textAlign: 'justify',
        }}
      >
        {children}
      </Typography>
    ),
  },
}
