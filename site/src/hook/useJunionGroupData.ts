import { useTranslation } from 'react-i18next';

import { useEffect } from 'react';
import { FetchJuniorData } from '@/types/storeTypes';

import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';

export function useJuniorGroupData<T>(
  data: T | null,
  fetchFn: FetchJuniorData,
  dependencies: never[] = []
) {
  const {
    i18n: { language },
  } = useTranslation();

  const { requestLang } = useJuniorGroupStore();
  const {
    junior: { _id: id },
  } = useCompetitionStore();

  useEffect(() => {
    if (requestLang === language && data) return;
    if (!id) return;
    fetchFn(id, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, id, language, ...dependencies]);
}
