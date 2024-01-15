import { FC, ChangeEvent } from 'react';
import { FormControl, RadioGroup, Radio } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { languages } from '#root/languages';
import { StyledFormControlLabel, LangDivider } from '../styled';
import { lang as langKey } from '@/libs/searchParamsKey';

interface LangPanelProps {
  additionalClickFn?: () => void;
}

const LangPanel: FC<LangPanelProps> = ({ additionalClickFn }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();

  const onChangeLang = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    changeLanguage(value);
    setSearchParams({ [langKey]: value });
    if (additionalClickFn) {
      additionalClickFn();
    }
  };

  return (
    <FormControl sx={{ flexShrink: 0 }}>
      <RadioGroup
        aria-label="language-panel"
        name="language"
        value={language}
        onChange={onChangeLang}
        row
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <StyledFormControlLabel
          value={languages[0].id}
          control={<Radio sx={{ display: 'none' }} />}
          label={languages[0].id}
          checked={languages[0].id === language}
          key={languages[0].id}
          aria-label={`Вибрати українську`}
        />
        <LangDivider />

        <StyledFormControlLabel
          value={languages[1].id}
          control={<Radio sx={{ display: 'none' }} />}
          label={languages[1].id}
          checked={languages[1].id === language}
          key={languages[1].id}
          aria-label={`Вибрати англійську`}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default LangPanel;
