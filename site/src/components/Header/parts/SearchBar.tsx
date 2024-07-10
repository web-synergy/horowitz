import { FC } from 'react';
import {
  Container,
  IconButton,
  Stack,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import SearchInput from './SearchInput';
import { Routes } from '@/types/routes.d';

interface SearchBarProps {
  onCloseSearchBar: () => void;
}

const SearchBar: FC<SearchBarProps> = ({ onCloseSearchBar }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { pathname } = useLocation();

  const isSearchPage = pathname === `/${Routes.SEARCH}`;
  return (
    <Container>
      <Stack direction={'row'} alignItems={'center'} gap={'60px'}>
        <Box sx={{ width: isDesktop ? '92.5%' : '100%' }}>
          <SearchInput type="bar" />
        </Box>

        {isDesktop && !isSearchPage && (
          <IconButton
            onClick={onCloseSearchBar}
            sx={{
              padding: 0,
            }}
          >
            <SvgSpriteIcon icon="close" />
          </IconButton>
        )}
      </Stack>
    </Container>
  );
};

export default SearchBar;
