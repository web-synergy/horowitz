import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useCompetitionStore } from '@/store/competitionStore';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import Loader from '@/components/Common/Loader';
import GroupBooklet from '@/components/GroupPages/GroupBooklet/GroupBooklet';

const JuniorBookletPage = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const { requestLang, booklet, fetchBooklet, isLoading } =
    useJuniorGroupStore();
  const {
    junior: { _id: id },
  } = useCompetitionStore();

  useEffect(() => {
    if (requestLang === language && booklet) return;
    if (!id) return;
    fetchBooklet(id, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [booklet, id, language]);

  console.log(booklet);
  if (isLoading) {
    <Loader />;
  }

  if (!booklet) return;

  return <GroupBooklet bookletUrl={booklet} goBackLink="" />;
};

export default JuniorBookletPage;
