import { FC, ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  TextField,
  InputAdornment,
  useTheme,
} from '@mui/material';
import { useSearchStore } from '@/store/searchStore';
import { Header } from '@/types/translation.d';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { Routes } from '@/types/routes.d';

interface SearchInputProps {
  onCloseMenu?: () => void;
  type: 'burger' | 'bar';
}

const SearchInput: FC<SearchInputProps> = ({ onCloseMenu, type }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { search, onChangeSearch } = useSearchStore();
  const navigate = useNavigate();

  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    onChangeSearch(value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCloseMenu && onCloseMenu();

    navigate(Routes.SEARCH);
  };

  const borderRadius = type === 'bar' ? '24px' : '8px';
  const height = type === 'bar' ? { xs: 24, md: 36 } : { xs: 56, md: 60 };
  const fontSize = type === 'bar' ? { xs: 12, md: 14 } : { xs: 16, md: 18 };
  return (
    <form onSubmit={onSubmit} style={{ width: '100%' }}>
      <FormControl aria-label="search form" sx={{ width: '100%' }}>
        <TextField
          value={search}
          onChange={onChangeInput}
          placeholder={t(`${Header.SEARCH}`)}
          autoComplete="off"
          sx={{
            '& .MuiInputBase-root': {
              '--TextField-brandBorderColor': theme.palette.common.white,
              height: height,
              backgroundColor: 'transparent',
              color: (theme) => theme.palette.common.white,
              fontSize: fontSize,
            },
            '& .MuiOutlinedInput-root fieldset': {
              borderRadius: borderRadius,
            },
          }}
          InputProps={{
            endAdornment: type === 'burger' && (
              <InputAdornment position={'end'}>
                <SvgSpriteIcon icon="search" />
              </InputAdornment>
            ),
            startAdornment: type === 'bar' && (
              <InputAdornment position={'start'}>
                <SvgSpriteIcon
                  icon="search"
                  sx={{ fontSize: { xs: '16px', md: '24px' } }}
                />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </form>
  );
};

export default SearchInput;
