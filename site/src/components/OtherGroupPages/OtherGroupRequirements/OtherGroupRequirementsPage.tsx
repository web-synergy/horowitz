import { FC } from 'react';
import { GroupPageProps } from '@/types/groupTypes';
import { useTranslation } from 'react-i18next';
import { useOtherGroupStore } from '@/store/otherGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';

import { useOtherGroupData } from '@/hook/useOtherGroupData';
import { Routes } from '@/types/routes.d';
import GroupTextPage from '@/components/GroupPages/GroupTextPage/GroupTextPage';

const OtherGroupRequirementsPage: FC<GroupPageProps> = ({ group }) => {
  const { t } = useTranslation();
  const { requirements, fetchRequirements } = useOtherGroupStore();
  const { slug } = useCompetitionStore();

  useOtherGroupData(requirements, fetchRequirements, group);

  const title = t(`navigation.${Routes.GROUP_REQUIREMENTS}`);
  const goBackLink = `${Routes.COMPETITIONS}/${slug}/${group}`;

  return (
    <GroupTextPage goBackLink={goBackLink} data={requirements} title={title} />
  );
};

export default OtherGroupRequirementsPage;
