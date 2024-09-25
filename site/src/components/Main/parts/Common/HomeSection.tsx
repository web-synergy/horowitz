import { FC, PropsWithChildren } from 'react';
import {
  Container,
  Typography,
  Stack,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import LinkBtn from '@/components/Common/LinkBtn';

interface HomeSectionProps {
  title: string;
  link?: string;
  linkTitle?: string;
}
export const HomeSection: FC<PropsWithChildren<HomeSectionProps>> = ({
  title,
  link,
  linkTitle,
  children,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box component={'section'} py={{ xs: 9, md: 12, lg: 15 }}>
      <Container>
        <CommonStackWrapper>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            gap={1}
          >
            <Typography variant="h1" component={'h2'}>
              {title}
            </Typography>
            {link && linkTitle && (
              <Box sx={{ flexShrink: 0 }}>
                <LinkBtn
                  title={linkTitle}
                  link={`/${link}`}
                  isTitleVisible={!isMobile}
                />
              </Box>
            )}
          </Stack>
          {children}
        </CommonStackWrapper>
      </Container>
    </Box>
  );
};
