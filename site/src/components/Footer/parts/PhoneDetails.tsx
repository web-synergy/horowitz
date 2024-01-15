import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon'
import { Link, Typography } from '@mui/material'
import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { DetailsStack } from '../styled'

interface PhoneDetailsProps {
  phone: string
  isMobile: boolean
}
const PhoneDetails: FC<PhoneDetailsProps> = ({ phone, isMobile }) => {
  return (
    <Link
      component={RouterLink}
      to={isMobile ? `tel:${phone}` : ''}
      onClick={e => !isMobile && e.preventDefault()}
      sx={{ flexShrink: 1 }}
    >
      <DetailsStack>
        <SvgSpriteIcon icon="phone" />
        <Typography variant="bodyLight" component={'p'}>
          {phone}
        </Typography>
      </DetailsStack>
    </Link>
  )
}

export default PhoneDetails
