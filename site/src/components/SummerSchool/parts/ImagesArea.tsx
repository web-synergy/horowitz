import { urlFor } from '@/config/sanity/imageUrl'
import { IImage } from '@/types/commonTypes'
import { Box } from '@mui/material'
import { FC } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

type ImagesAreaProps = { gallery: IImage[] }

const ImagesArea: FC<ImagesAreaProps> = ({ gallery }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: '24px',
        maxHeight: { xs: '100%', lg: '620px' },
        gridTemplateColumns: {
          xs: '1fr',
          md: 'repeat(4, 1fr)',
          lg: 'repeat(6, 1fr)',
        },
        gridTemplateRows: {
          xs: 'repeat(6, 1fr)',
          md: '14% 1fr 14% 1fr', // md: '242px 1fr 242px 1fr',
          lg: '218px 1fr 218px',
        },
        gridTemplateAreas: {
          xs: `
          'img1'
          'img2'
          'img3'
          'img4'
          'img5'
          'img6'
          `,
          md: `
          'img1 img2 img2 img2'
          'img3 img3 img3 img3'
          'img5 img5 img5 img4'
          'img6 img6 img6 img6'
          `,
          lg: `
          'img1 img2 img2 img3 img3 img3'
          'img6 img6 img6 img3 img3 img3'
          'img6 img6 img6 img5 img5 img4'
          `,
        },
      }}
    >
      {gallery.map((image, idx) => (
        <Box
          key={image._key}
          sx={{
            gridArea: `img${idx + 1}`,
            img: {
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: {
                xs: 'top',
                md: 'center',
              },
              aspectRatio: {
                xs: '1.44',
                md: 'unset',
              },
            },
          }}
        >
          <LazyLoadImage src={urlFor(image).auto('format').url().toString()} alt="school gallery" />
        </Box>
      ))}
    </Box>
  )
}

export default ImagesArea
