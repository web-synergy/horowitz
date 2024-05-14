import { Box, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';

import GroupList from './GroupList';
import { Debut } from '@/types/translation.d';

const DebutMain = () => {
  const { t } = useTranslation();
  const { debut } = useJuniorGroupStore();

  return (
    <Box role="tabpanel">
      {debut && (
        <Stack gap={7}>
          <GroupList
            title={t(`navigation.${Debut.GROUP_A}`)}
            participants={debut.groupA}
            goTo={Debut.GROUP_A}
          />
          <GroupList
            title={t(`navigation.${Debut.GROUP_B}`)}
            participants={debut.groupB}
            goTo={Debut.GROUP_B}
          />
          <GroupList
            title={t(`navigation.${Debut.GROUP_C}`)}
            participants={debut.groupC}
            goTo={Debut.GROUP_C}
          />
          <GroupList
            title={t(`navigation.${Debut.GROUP_D}`)}
            participants={debut.groupD}
            goTo={Debut.GROUP_D}
          />
        </Stack>
      )}
    </Box>
  );
};

export default DebutMain;
