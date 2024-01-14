import { Box, Link, LinkProps, styled } from '@mui/material'
import { FC } from 'react'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'
import SvgSpriteIcon from './SvgSpriteIcon'

const StyledLink = styled(Link)<LinkProps & RouterLinkProps>(({ theme }) => ({
  border: `1px solid ${theme.palette.common.white}`,
  borderRadius: '50%',
  padding: '5px',
  textAlign: 'center',
  '&:hover': {
    borderColor: theme.palette.action.focus,
  },
}))

interface SocialMediaProps {
  facebookLink?: string
  instagramLink?: string
  youtubeLink?: string
}

const SocialMedia: FC<SocialMediaProps> = ({ facebookLink, instagramLink, youtubeLink }) => {
  return (
    <Box sx={{ 'a:not(:last-child)': { marginRight: '16px' } }}>
      {facebookLink && (
        <StyledLink component={RouterLink} to={facebookLink} target="_blank">
          <SvgSpriteIcon icon="facebook" />
        </StyledLink>
      )}
      {instagramLink && (
        <StyledLink component={RouterLink} to={instagramLink} target="_blank">
          <SvgSpriteIcon icon="instagram" />
        </StyledLink>
      )}
      {youtubeLink && (
        <StyledLink component={RouterLink} to={youtubeLink} target="_blank">
          <SvgSpriteIcon icon="youtube" />
        </StyledLink>
      )}
    </Box>
  )
}

export default SocialMedia
