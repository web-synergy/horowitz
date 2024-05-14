import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import Loader from '@/components/Common/Loader';
import GroupParticipant from '@/components/GroupPages/GroupParticipant/GroupParticipant';
import { Routes } from '@/types/routes.d';
import { ParticipantType } from '@/types/groupTypes';

const JuniorParticipantProfile = () => {
  const { slug } = useParams();

  const {
    i18n: { language },
  } = useTranslation();
  const { requestLang, junior, debut, fetchParticipants, isLoading } =
    useJuniorGroupStore();
  const {
    junior: { _id: id },
  } = useCompetitionStore();

  useEffect(() => {
    if (requestLang === language && junior) return;
    if (!id) return;

    fetchParticipants(id, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [junior, id, language]);

  if (isLoading) {
    return <Loader />;
  }

  if (!junior || !debut) {
    return;
  }

  const groupName = slug?.split('-')[0];

  const participantData =
    groupName === 'junior'
      ? junior.find((participant) => participant.slug === slug)
      : Object.entries(debut).reduce<null | ParticipantType>((acc, item) => {
          const [group, participants] = item;
          if (group.toLowerCase() === groupName) {
            const profile = participants.find(
              (participant) => participant.slug === slug
            );
            return profile ? profile : null;
          }

          return acc;
        }, null);

  if (!participantData) {
    return <Navigate to="404" />;
  }

  return (
    <GroupParticipant
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}/${Routes.GROUP_PARTICIPANTS}`}
      participant={participantData}
    />
  );
};

export default JuniorParticipantProfile;
