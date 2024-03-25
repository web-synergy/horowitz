import { FC } from 'react'

import { Box, Button, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

type ButtonBG = {
  title: string
  image: string
}

type ButtonsAreaProps = {
  currentBg: string | undefined
  restBgs: ButtonBG[]
}
const ButtonsArea: FC<ButtonsAreaProps> = ({ currentBg, restBgs }) => {
  if (!currentBg) return null
  return <ListItem bgImage={currentBg} />
}

export default ButtonsArea

const ListItem = ({ bgImage }: { bgImage: string }) => {
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
          to={'/'}
          sx={{
            borderColor: theme => theme.palette.neutral[70],
            backgroundColor: theme => theme.palette.common.white,
          }}
        >
          Заявка на участь
        </Button>
      </Stack>
    </Box>
  )
}
