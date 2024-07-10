import { FC } from 'react';
import {
  Container,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import SearchInput from './SearchInput';

interface SearchBarProps {
  onCloseSearchBar: () => void;
}

const SearchBar: FC<SearchBarProps> = ({ onCloseSearchBar }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Container>
      <Stack direction={'row'} alignItems={'center'} gap={'60px'}>
        <SearchInput type="bar" />
        {isDesktop && (
          <IconButton onClick={onCloseSearchBar} sx={{ padding: 0 }}>
            <SvgSpriteIcon icon="close" />
          </IconButton>
        )}
      </Stack>
    </Container>
  );
};

export default SearchBar;
