import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import GridTemplate from '@/components/Templates/GridTemplate';
import ParticipantCard from './ParticipantCard';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import { ETabs } from '@/types/translation.d';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';

const JuniorGroup = () => {
  const { junior } = useJuniorGroupStore();
  const { t } = useTranslation();
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
        <GridTemplate list={junior} gridItem={ParticipantCard} />
      </CommonStackWrapper>
    </>
  );
};

export default JuniorGroup;
