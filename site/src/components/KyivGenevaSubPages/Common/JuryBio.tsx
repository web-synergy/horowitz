import { FC, useMemo } from 'react';

import { useTranslation } from 'react-i18next';
import { getLangValue } from '@/utils/getLangValue';

import { IJury } from '@/types/kyivGenevaDataTypes';
import TextBlockComponent from '@/components/Templates/TextBlockComponent/TextBlockComponent';

interface JuryProps {
  jury: IJury;
}

const Jury: FC<JuryProps> = ({ jury }) => {
  const {
    i18n: { language },
  } = useTranslation();

  const textArray = useMemo(() => {
    const text = getLangValue(language, jury.text);
    return text.split('\n');
  }, [jury.text, language]);

  const name = getLangValue(language, jury.name);

  return (
    <TextBlockComponent title={name} textArray={textArray} img={jury.photo} />
  );
};

export default Jury;
