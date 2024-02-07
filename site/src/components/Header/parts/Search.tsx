import { useState, ChangeEvent } from 'react';
import {
  IconButton,
  useTheme,
  useMediaQuery,
  FormControl,
  TextField,
  InputAdornment,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { Header } from '@/types/translation.d';

const Search = () => {
  const [search, setSearch] = useState('');
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = useTranslation();

  const onChangeSearch = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setSearch(value);
  };
  return (
    <>
      {isDesktop ? (
        <IconButton sx={{ padding: 0 }}>
          <SvgSpriteIcon icon="search" />
        </IconButton>
      ) : (
        <FormControl aria-label="search form">
          <TextField
            value={search}
            onChange={onChangeSearch}
            placeholder={t(`${Header.SEARCH}`)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SvgSpriteIcon icon="search" />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      )}
    </>
  );
};

export default Search;
