import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon'
import { Link } from '@mui/material'
import { FC } from 'react'

interface GoBackBtnProps {
  title: string
  onClick: () => void
}

const GoBackBtn: FC<GoBackBtnProps> = ({ title, onClick }) => {
  return (
    <Link
      sx={{
        color: theme => theme.palette.neutral[60],
      }}
      onClick={onClick}
    >
      <SvgSpriteIcon sx={{ transform: 'rotate(90deg)' }} icon="arrow" />
      {title}
    </Link>
  )
}

export default GoBackBtn
