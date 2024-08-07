import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import GridTemplate from '@/components/Templates/GridTemplate';
import ParticipantItem from '@/components/GroupPages/GroupParticipantList/parts/ParticipantItem';

import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import { ETabs } from '@/types/translation.d';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';

const JuniorGroup = () => {
  const { participants } = useJuniorGroupStore();
  const { t } = useTranslation();
  const junior = participants?.filter((item) => item.group === ETabs.JUNIOR);

  if (!junior) {
    return;
  }

  const translatedTitle = t(`navigation.${ETabs.JUNIOR}`);

  return (
    <>
      <CommonStackWrapper>
        <Typography variant="h1" component="h2">
          {translatedTitle}
        </Typography>
        <GridTemplate list={junior} gridItem={ParticipantItem} />
      </CommonStackWrapper>
    </>
  );
};

export default JuniorGroup;
