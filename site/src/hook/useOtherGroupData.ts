import { useTranslation } from 'react-i18next';

import { useEffect } from 'react';
import { FetchOtherGroupData } from '@/types/storeTypes';
import { OtherGroupClassType } from './../types/groupTypes';

import { useOtherGroupStore } from '@/store/otherGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';

export function useOtherGroupData<T>(
  data: T | null,
  fetchFn: FetchOtherGroupData,
  group: OtherGroupClassType,
  dependencies: never[] = []
) {
  const {
    i18n: { language },
  } = useTranslation();

  const { requestLang, group: storeGroup } = useOtherGroupStore();

  const {
    [group]: { _id: id },
  } = useCompetitionStore();

  useEffect(() => {
    const isLangNotChange = requestLang === language;
    const isGroupNotChange = storeGroup === group;
    if (isLangNotChange && isGroupNotChange && data) return;
    if (!id) return;
    fetchFn(id, language, group);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, id, language, ...dependencies]);
}
