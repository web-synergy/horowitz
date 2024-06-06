import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import GridTemplate from '@/components/Templates/GridTemplate';
import ParticipantItem from '@/components/GroupPages/GroupParticipantList/parts/ParticipantItem';

import { EDebut } from '@/types/translation.d';

interface DebutGroupProps {
  title: EDebut;
}

const DebutGroup: FC<DebutGroupProps> = ({ title }) => {
  const { t } = useTranslation();
  const { participants } = useJuniorGroupStore();

  const groupParticipants = participants?.filter(
    (item) => item.group === title
  );

  if (!groupParticipants) {
    return;
  }

  const translatedTitle = t(`navigation.${title}`);
  return (
    <CommonStackWrapper>
      <Typography variant="h1" component="h2">
        {translatedTitle}
      </Typography>
      <GridTemplate gridItem={ParticipantItem} list={groupParticipants} />
    </CommonStackWrapper>
  );
};

export default DebutGroup;
