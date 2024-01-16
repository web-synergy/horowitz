import { FC } from 'react'
import { DetailsStack } from '../styled'
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon'
import { Typography } from '@mui/material'

interface LocationDetailsProps {
  location: string
}

const LocationDetails: FC<LocationDetailsProps> = ({ location }) => {
  return (
    <DetailsStack>
      <SvgSpriteIcon icon="location" />
      <Typography variant="bodyLight">{location}</Typography>
    </DetailsStack>
  )
}

export default LocationDetails
