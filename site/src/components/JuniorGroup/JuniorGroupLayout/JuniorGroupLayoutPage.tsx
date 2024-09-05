import { useTranslation } from 'react-i18next';
import GroupLayout from '@/components/GroupPages/GroupLayout/GroupLayout';
import SeoComponent from '@/components/Common/SEO';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import { Routes } from '@/types/routes.d';

const JuniorGroupLayoutPage = () => {
  const { isLoading } = useJuniorGroupStore();
  const { slug } = useCompetitionStore();
  const { t } = useTranslation();

  const title = t(`navigation.${Routes.JUNIOR}`);
  return (
    <>
      <SeoComponent canonicalUrl={`${slug}/junior`} title={title} />
      <GroupLayout groupLoading={isLoading} />;
    </>
  );
};

export default JuniorGroupLayoutPage;
