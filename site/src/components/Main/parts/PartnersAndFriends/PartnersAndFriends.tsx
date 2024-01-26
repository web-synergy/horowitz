import { Box, Stack } from '@mui/material'
import { FC } from 'react'
import { MainTitle } from '../../styled'

const PartnersAndFriends: FC = () => {
  return (
    <Stack>
      <MainTitle component={'h2'} sx={{ textAlign: 'center' }}>
        Партнери та друзі
      </MainTitle>
    </Stack>
  )
}

export default PartnersAndFriends
