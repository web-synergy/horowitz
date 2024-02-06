import { Box, Container, Typography, styled } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import TextFormat from './parts/TextFormat';
import { theme } from '@/theme';
import Breadcrumbs from '@/components/Common/Breadcrumbs';
import { Routes } from '@/types/routes.d';
import { useTranslation } from 'react-i18next';
import LinkGoBack from '@/components/Common/LinkGoBack';
import { KyivGeneva } from '@/types/translation.d';
import conditionsData from '@/assets/kyiv-geneva/KyivGenevaConditions';
export interface ITextFormat {
  title: string;
  text: {
    p?: string;
    list?: string[];
    h4?: string;
  }[];
}

export const RichText = styled(Typography)(() => ({
  display: 'block',
  textAlign: 'justify',
  marginBottom: '8px',
  [theme.breakpoints.up('lg')]: {
    marginBottom: '16px',
  },
}));
const KyivGenevaConditions = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const data: ITextFormat[] = conditionsData[language];
  return (
    <PageTemplate>
      <Container>
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '60px', md: '80px', lg: '100px' },
            left: { xs: '16px', md: '40px', lg: '80px' },
            maxWidth: '100%',
            zIndex: 10,
          }}>
          <Breadcrumbs
            history={[
              {
                title: t(`navigation.${Routes.KYIV_GENEVA}`),
                href: `/${Routes.KYIV_GENEVA}`,
              },
            ]}
            title={t(`kyivGeneva.${Routes.KYIV_GENEVA_CONDITIONS}`)}
            mode='dark'
          />
        </Box>
        <Box sx={{ my: { xs: '48px', lg: '120px' } }}>
          <Typography
            sx={{ mb: { xs: '-24px', lg: '0px' } }}
            component={'h1'}
            variant='h1'>
            {t(`kyivGeneva.${Routes.KYIV_GENEVA_CONDITIONS}`)}
          </Typography>
          {data &&
            data.map((item, index) => (
              <TextFormat key={index} title={item.title} text={item.text} />
            ))}
          <Box sx={{ mt: '48px' }}>
            <LinkGoBack
              title={t(`kyivGeneva.${KyivGeneva.GO_KYIV_GENEVA}`)}
              href={`/${Routes.KYIV_GENEVA}`}
            />
          </Box>
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaConditions;
