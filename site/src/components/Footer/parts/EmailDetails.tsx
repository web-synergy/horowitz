import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon'
import { Link, Typography } from '@mui/material'
import { FC } from 'react'
import { DetailsStack } from '../styled'

interface EmailDetailsProps {
  email: string
}

const EmailDetails: FC<EmailDetailsProps> = ({ email }) => {
  return (
    <Link href={`mailto:${email}`}>
      <DetailsStack>
        <SvgSpriteIcon icon="mail" />
        <Typography variant="bodyRegular" component={'p'}>
          {email}
        </Typography>
      </DetailsStack>
    </Link>
  )
}

export default EmailDetails
