import { Container, Typography, Box, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageTemplate from '../Common/PageTemplate';
import { useSearchStore } from '@/store/searchStore';
import Loader from '../Common/Loader';
import useSearchResults from '@/hook/useSearchResults';
import SearchBlock from './parts/SearchBlock';
import CommonStackWrapper from '../Common/CommonStackWrapper';
import { Header } from '@/types/translation.d';
import { defineResultText } from '@/utils/defineResultText';
import SeoComponent from '../Common/SEO';

const SearchPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { isLoading, submitSearch } = useSearchStore();
  const { result } = useSearchResults();

  if (isLoading) {
    return <Loader />;
  }

  const count = result ? result.length : 0;

  const resultText = defineResultText(count, language);

  const title =
    submitSearch !== ''
      ? t(`${Header.SEARCH}.title`, {
          search: submitSearch,
          count,
          result: resultText,
        })
      : '';

  return (
    <>
      <SeoComponent title={t(`${Header.SEARCH}.placeholder`)} />
      <Box sx={{ height: { xs: '56px', md: '68px' } }}></Box>
      <PageTemplate>
        <Container>
          <CommonStackWrapper>
            <Typography variant="h3">{title}</Typography>
            <Stack gap={{ xs: 3, md: 6 }}>
              {result &&
                result.map((block, index) => (
                  <SearchBlock block={block} key={index} />
                ))}
            </Stack>
          </CommonStackWrapper>
        </Container>
      </PageTemplate>
    </>
  );
};

export default SearchPage;
