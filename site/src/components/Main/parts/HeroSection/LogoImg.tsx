import { Box } from '@mui/material'
import { FC } from 'react'

interface LogoImgProps {
  src: string
  alt: string
}

const LogoImg: FC<LogoImgProps> = ({ src, alt }) => {
  return (
    <Box
      component={'img'}
      src={src}
      alt={alt}
      sx={{
        height: '48px',
        width: {
          xs: '288px',
          md: '250px',
        },
      }}
    />
  )
}

export default LogoImg
