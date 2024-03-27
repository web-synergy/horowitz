import { AnnualSummerSchoolTypes } from '@/types/annualSummerSchoolTypes'
import { FC } from 'react'

import { Box, Button, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

//  ========== ! TEMP ==========
import btn1 from '@/assets/images/buttonsBg/variant1.jpg'
import btn2 from '@/assets/images/buttonsBg/variant2.jpg'
import btn3 from '@/assets/images/buttonsBg/variant3.jpg'
const buttonsBg = [
  { title: '1', image: btn1 },
  { title: '2', image: btn2 },
  { title: '3', image: btn3 },
]
//  ========== ! TEMP ==========

type ButtonsAreaProps = {
  data: AnnualSummerSchoolTypes
}
const ButtonsArea: FC<ButtonsAreaProps> = ({ data: { button, isActive } }) => {
  const currentBg = buttonsBg.filter(item => item.title === button).pop()
  return <ListItem bgImage={currentBg?.image} isActive={isActive} />
}

export default ButtonsArea

type ListItemProps = {
  bgImage: string | undefined
  isActive: boolean
}
const ListItem: FC<ListItemProps> = ({ bgImage, isActive }) => {
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
          to={'/'}
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
