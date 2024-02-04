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
  return isMobile ? (
    <Link component={RouterLink} to={`tel:${phone}`} sx={{ flexShrink: 1 }}>
      <DetailsStack>
        <SvgSpriteIcon icon="phone" />
        <Typography variant="bodyLight" component={'p'}>
          {phone}
        </Typography>
      </DetailsStack>
    </Link>
  ) : (
    <DetailsStack>
      <SvgSpriteIcon icon="phone" />
      <Typography variant="bodyLight" component={'p'}>
        {phone}
      </Typography>
    </DetailsStack>
  )
}

export default PhoneDetails
