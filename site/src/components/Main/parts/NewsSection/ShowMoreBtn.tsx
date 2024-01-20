import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon'
import { Box, Link, Typography } from '@mui/material'
import { FC } from 'react'

import { Link as RouterLink } from 'react-router-dom'

interface ShowMoreBtnProps {
  link: string
  title: string
  isTitleVisible?: boolean
}

const ShowMoreBtn: FC<ShowMoreBtnProps> = ({ link, title, isTitleVisible = true }) => {
  return (
    <Link component={RouterLink} to={link} sx={{ display: 'inline-block' }}>
      {isTitleVisible && (
        <Typography variant="bodyRegular" component={'span'}>
          {title}
        </Typography>
      )}
      <Box
        sx={{
          display: 'inline-block',
          marginLeft: '8px',
          transform: 'translate(-2px, 0)',
          rotate: '-90deg',
          height: '100%',
        }}
      >
        <SvgSpriteIcon icon="arrow" />
      </Box>
    </Link>
  )
}

export default ShowMoreBtn
