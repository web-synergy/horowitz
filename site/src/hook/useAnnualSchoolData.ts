import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { FetchAnnualSchoolType } from '@/types/storeTypes';

import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';

export function useAnnualSchoolData<T>(
  data: T | null,
  fetchFn: FetchAnnualSchoolType,
  dependencies: never[] = []
) {
  const {
    i18n: { language },
  } = useTranslation();
  const { pathname } = useLocation();

  const yearFromPath = pathname.split('/')[2].slice(-4);

  const { requestLang, year: requestYear } = useAnnualSummerSchoolStore();

  useEffect(() => {
    const isLangNotChange = requestLang === language;
    const isYearNotChange = requestYear === yearFromPath;
    const isDataExist = data;
    if (isLangNotChange && isYearNotChange && isDataExist) return;

    fetchFn(language, yearFromPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, yearFromPath, language, ...dependencies]);
}
