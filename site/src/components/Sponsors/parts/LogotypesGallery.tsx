import { urlFor } from '@/config/sanity/imageUrl'
import { Partner } from '@/types/partnersTypes'
import { Box, Typography, Stack } from '@mui/material'
import { FC } from 'react'

interface LogotypesGalleryProps {
  title: string
  gallery: Partner[]
}
const LogotypesGallery: FC<LogotypesGalleryProps> = ({ title, gallery }) => {
  return (
    <Box>
      <Typography variant="subhead">{title}</Typography>
      <Stack
        sx={{
          flexDirection: 'row',
          columnGap: {
            xs: '28px',
            lg: '16px',
          },
          rowGap: '24px',
          flexWrap: {
            xs: 'wrap',
            lg: 'nowrap',
          },
          marginTop: {
            xs: '24px',
            md: '28px',
          },
        }}
      >
        {gallery.length &&
          gallery.map(item => (
            <Box key={item._key}>
              <Box
                component={'img'}
                src={urlFor(item.img).url().toString()}
                alt={item.title}
                sx={{
                  height: {
                    xs: '54px',
                    md: '70px',
                    lg: '80px',
                  },
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
          ))}
      </Stack>
    </Box>
  )
}

export default LogotypesGallery
