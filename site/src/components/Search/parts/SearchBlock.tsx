import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { Stack, Typography, Divider, Link } from '@mui/material';
import { SearchType } from '@/types/searchType';
import { Header } from '@/types/translation.d';
import GrowView from '@/components/Common/GrowView';

interface SearchBlockProps {
  block: SearchType;
}

const SearchBlock: FC<SearchBlockProps> = ({ block }) => {
  const { t } = useTranslation();
  const { page, path, text, title } = block;
  const linkText = t(`${Header.SEARCH}.page`, { page });
  return (
    <GrowView>
      <Stack gap={2}>
        <Link
          component={RouterLink}
          to={path}
          variant="caption"
          sx={{ pb: 0, color: (theme) => theme.palette.neutral[40] }}
        >
          {linkText}
        </Link>
        <Typography variant="subhead">{title}</Typography>
        <Typography variant="caption">{text}</Typography>
        <Divider
          sx={{ backgroundColor: (theme) => theme.palette.neutral[40] }}
        />
      </Stack>
    </GrowView>
  );
};

export default SearchBlock;
