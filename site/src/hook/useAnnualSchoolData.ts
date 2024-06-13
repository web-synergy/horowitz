import { useTranslation } from 'react-i18next';

import { useEffect } from 'react';
import { FetchAnnualSchoolType } from '@/types/storeTypes';

import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';

export function useAnnualSchoolData<T>(
  year: string,
  data: T | null,
  fetchFn: FetchAnnualSchoolType,
  dependencies: never[] = []
) {
  const {
    i18n: { language },
  } = useTranslation();

  const { requestLang, year: requestYear } = useAnnualSummerSchoolStore();

  useEffect(() => {
    const isLangNotChange = requestLang === language;
    const isYearNotChange = requestYear === year;
    const isDataExist = data;
    if (isLangNotChange && isYearNotChange && isDataExist) return;

    fetchFn(language, year);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, year, language, ...dependencies]);
}
