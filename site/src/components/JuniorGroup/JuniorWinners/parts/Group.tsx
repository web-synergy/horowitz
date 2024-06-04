import { FC } from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ETabs, EDebut } from '@/types/translation.d';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import GridTemplate from '@/components/Templates/GridTemplate';
import WinnerItem from '@/components/GroupPages/GroupWinners/parts/WinnerItem';
import { ImagesArray } from '@/components/Templates/PortableComponent/parts/ImageComponent';
import { ParticipantType } from '@/types/groupTypes';

interface GroupWinnersProps {
  title: ETabs | EDebut;
}

const GroupWinners: FC<GroupWinnersProps> = ({ title }) => {
  const { winners, participants, juniorGallery } = useJuniorGroupStore();
  const { t } = useTranslation();
  if (!winners || !participants) {
    return;
  }

  const renderWinners = winners
    ?.filter((item) => item.group === title)
    .map((winner) => {
      const participantData = participants.find(
        (participant) => participant.id === winner.participantKey
      );
      return {
        ...winner,
        participantData: participantData || ({} as ParticipantType),
      };
    });

  const groupGallery = juniorGallery?.find((item) => item.subgroup === title);

  const renderTitle = t(`navigation.${title}`);
  return (
    <CommonStackWrapper>
      <Typography variant="h1" component="h2">
        {renderTitle}
      </Typography>
      <GridTemplate
        gridItem={WinnerItem}
        list={renderWinners}
        justify="center"
      />
      {groupGallery && <ImagesArray value={groupGallery.gallery} />}
    </CommonStackWrapper>
  );
};

export default GroupWinners;
