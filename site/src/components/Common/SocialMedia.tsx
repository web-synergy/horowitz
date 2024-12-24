import { useSettingsStore } from '@/store/settingStore';

import { Box, Link, LinkProps, Stack, styled } from '@mui/material';
import { FC } from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import SvgSpriteIcon from './SvgSpriteIcon';

const StyledLink = styled(Link)<LinkProps & RouterLinkProps>(({ theme }) => ({
  border: `1px solid ${theme.palette.common.white}`,
  borderRadius: '50%',
  padding: '5px',
  textAlign: 'center',
  '&:hover': {
    borderColor: theme.palette.action.focus,
  },
}));

interface SocialMediaProps {
  vertical?: boolean;
}

const SocialMedia: FC<SocialMediaProps> = ({ vertical }) => {
  const mediaLinks = useSettingsStore((state) => state.sociable);
  if (!mediaLinks) return null;
  const { facebook, instagram, youTube, issuu } = mediaLinks;

  return (
    <Stack
      sx={{ gap: '16px', flexDirection: () => (vertical ? 'column' : 'row') }}
    >
      <Box>
        <StyledLink component={RouterLink} to={facebook} target="_blank">
          <SvgSpriteIcon icon="facebook" />
        </StyledLink>
      </Box>

      <Box>
        <StyledLink component={RouterLink} to={instagram} target="_blank">
          <SvgSpriteIcon icon="instagram" />
        </StyledLink>
      </Box>

      <Box>
        <StyledLink component={RouterLink} to={youTube} target="_blank">
          <SvgSpriteIcon icon="youtube" />
        </StyledLink>
      </Box>

      <Box>
        <StyledLink component={RouterLink} to={issuu} target="_blank">
          <SvgSpriteIcon icon="issuu" />
        </StyledLink>
      </Box>
    </Stack>
  );
};

export default SocialMedia;
