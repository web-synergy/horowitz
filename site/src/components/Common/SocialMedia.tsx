import { useSettingsStore } from '@/store'
// import { useTranslation } from 'react-i18next';

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

const SocialMedia: FC = () => {
  // const {
  //   i18n: { language },
  // } = useTranslation();

  const socialMediaLinks = useSettingsStore(state => state.sociable)
  // const fetchSocialMediaLinks = useSettingsStore(
  //   (state) => state.fetchSettings
  // );

  // useEffect(() => {
  //   fetchSocialMediaLinks(language);
  // }, []);

  if (!socialMediaLinks) return
  const { facebook, instagram, youTube } = socialMediaLinks

  return (
    <Box sx={{ 'a:not(:last-child)': { marginRight: '16px' } }}>
      <StyledLink component={RouterLink} to={facebook} target="_blank">
        <SvgSpriteIcon icon="facebook" />
      </StyledLink>

      <StyledLink component={RouterLink} to={instagram} target="_blank">
        <SvgSpriteIcon icon="instagram" />
      </StyledLink>

      <StyledLink component={RouterLink} to={youTube} target="_blank">
        <SvgSpriteIcon icon="youtube" />
      </StyledLink>
    </Box>
  )
}

export default SocialMedia
