import Breadcrumbs from '@/components/Common/Breadcrumbs'
import { Box, Container } from '@mui/material'
import { FC } from 'react'
import { BannerBox } from './styled'

type BannerSectionProps = {
  bannerImg: string
  breadcrumbsTitle: string
}

const BannerSection: FC<BannerSectionProps> = ({ bannerImg, breadcrumbsTitle }) => {
  return (
    <BannerBox>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <Box
          component={'img'}
          src={bannerImg}
          alt="banner image"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'bottom',
          }}
        />
      </Box>
      <Box sx={{ position: 'relative', zIndex: 3 }}>
        <Container>
          <Breadcrumbs mode="dark" title={breadcrumbsTitle} />
        </Container>
      </Box>
    </BannerBox>
  )
}

export default BannerSection
