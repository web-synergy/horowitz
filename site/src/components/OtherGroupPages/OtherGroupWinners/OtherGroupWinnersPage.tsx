import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { GroupPageProps } from '@/types/groupTypes';
import { useCompetitionStore } from '@/store/competitionStore';
import { useOtherGroupData } from '@/hook/useOtherGroupData';
import { useOtherGroupStore } from '@/store/otherGroupStore';
import { Routes } from '@/types/routes.d';
import GroupWinners from '@/components/GroupPages/GroupWinners/GroupWinners';
import { ParticipantType } from '@/types/groupTypes';

const OtherGroupWinnersPage: FC<GroupPageProps> = ({ group }) => {
  const { t } = useTranslation();
  const { slug } = useCompetitionStore();
  const {
    winners,
    participants,
    fetchParticipants,
    fetchWinnersData,
    winnersGallery,
  } = useOtherGroupStore();

  useOtherGroupData(winners, fetchWinnersData, group);
  useOtherGroupData(participants, fetchParticipants, group);

  const title = t(`navigation.${Routes.GROUP_WINNERS}`);
  const goBackLink = `/${Routes.COMPETITIONS}/${slug}/${group}`;

  if (!winners || !participants) {
    return;
  }
  const renderWinners = winners.map((winner) => {
    const participantData = participants.find(
      (participant) => participant.id === winner.participantKey
    );
    return {
      ...winner,
      participantData: participantData || ({} as ParticipantType),
    };
  });

  return (
    <GroupWinners
      title={title}
      goBackLink={goBackLink}
      winners={renderWinners}
      winnerGallery={winnersGallery}
    />
  );
};

export default OtherGroupWinnersPage;
