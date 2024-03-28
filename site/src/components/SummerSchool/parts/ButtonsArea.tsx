import { MainAnnualSummerSchoolTypes } from '@/types/annualSummerSchoolTypes'
import { FC } from 'react'

import { Box, Button, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

//  ========== ! TEMP ==========
import btn1 from '@/assets/images/buttonsBg/variant1.jpg'
import btn2 from '@/assets/images/buttonsBg/variant2.jpg'
import btn3 from '@/assets/images/buttonsBg/variant3.jpg'
const buttonsBg = [
  { title: '1', image: btn1 },
  { title: '2', image: btn2 },
  { title: '3', image: btn3 },
]

const buttonsList = new Array(4).fill(0).map((_, idx) => ({ year: 2025 - idx, isActive: false }))

//  ========== ! TEMP ==========

type ButtonsAreaProps = {
  data: MainAnnualSummerSchoolTypes
}
const ButtonsArea: FC<ButtonsAreaProps> = ({ data: { button, isActive } }) => {
  // @ts-ignore
  const getRenderList = (btnsList, imgsList, currBg) => {
    // @ts-ignore
    const firstBG = imgsList.splice(imgsList.findIndex(item => item.title === currBg)).pop()
    let startIdxImages = 0
    // @ts-ignore
    const renderList = btnsList.reduce((acc, btn, idx) => {
      if (idx === 0) {
        acc.push({ ...btn, ...firstBG })
        return acc
      }
      if (idx > imgsList.length - 1 && startIdxImages >= imgsList.length) {
        startIdxImages = 0
      }
      acc.push({ ...btn, ...imgsList[startIdxImages] })
      startIdxImages += 1
      return acc
    }, [])
    return renderList
  }

  const renderList = getRenderList(buttonsList, buttonsBg, button)

  return (
    <Swiper spaceBetween={24} slidesPerView={3.2}>
      {renderList.length &&
        renderList.map((button, idx) => (
          <SwiperSlide key={idx}>
            <ListItem bgImage={button.image} isActive={button.isActive} />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default ButtonsArea

type ListItemProps = {
  bgImage: string | undefined
  isActive: boolean
  slug: string
}
const ListItem: FC<ListItemProps> = ({ bgImage, isActive, slug }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: {
          xs: '288px',
          md: '332px',
          lg: '357px',
        },
        padding: {
          xs: '40px 16px',
          md: '40px 30px',
          lg: '46px 24px',
        },
        img: {
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        },
      }}
    >
      <img src={bgImage} alt="background image" />
      <Stack spacing={{ xs: 3, md: 5, lg: 6 }}>
        <Button
          variant="transparent"
          component={RouterLink}
          to={slug}
          sx={{
            borderColor: theme => theme.palette.neutral[70],
            '&:hover': {
              color: 'inherit',
              bgcolor: 'transparent',
              borderColor: theme => theme.palette.neutral[70],
            },
          }}
        >
          Музична академія 2025 р.
        </Button>
        <Button
          variant="transparent"
          component={RouterLink}
          disabled={!isActive}
          to={'/'}
          sx={{
            borderColor: theme => theme.palette.neutral[70],
            backgroundColor: theme => theme.palette.common.white,
            '&.Mui-disabled': {
              color: theme => theme.palette.neutral[50],
              bgcolor: theme => theme.palette.neutral[20],
            },
          }}
        >
          Заявка на участь
        </Button>
      </Stack>
    </Box>
  )
}
