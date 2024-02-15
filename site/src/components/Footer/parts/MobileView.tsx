import { useSettingsStore } from '@/store/settingStore';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledStack } from '../styled';
import AboutUs from './AboutUs';
import Copyright from './Copyright';
import FooterContacts from './FooterContacts';
import FooterPressCenter from './FooterPressCenter';

const MobileView: FC = () => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));

  const { t } = useTranslation();

  const contacts = useSettingsStore(state => state.contacts);

  if (!contacts) return null;

  const { address: location, email, phone, pressCenter } = contacts;

  return (
    <>
      <Stack sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: '56px' }}>
        <AboutUs about={t('institutional_name')} />
        <StyledStack>
          <FooterContacts {...{ isMobile, location, email, phone }} />
          <FooterPressCenter
            {...{
              isMobile,
              phone: pressCenter.phone,
              email: pressCenter.email,
            }}
          />
        </StyledStack>
      </Stack>
      <Copyright />
    </>
  );
};

export default MobileView;
