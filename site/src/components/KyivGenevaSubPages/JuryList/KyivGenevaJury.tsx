import { Container, Typography, Stack, Grid, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PageTemplate from '@/components/Common/PageTemplate';
import { useTranslation } from 'react-i18next';
import { content } from '@/assets/kyiv-geneva/jury/content';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';

const KyivGenevaJury = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  return (
    <PageTemplate>
      <Container>
        <Stack
          direction="column"
          pt={{ xs: 6, lg: 15 }}
          pb={{ xs: 9, md: 12, lg: 15 }}
        >
          <Typography variant="h1" mb={{ xs: 3, lg: 6 }}>
            {t('jury.title')}
          </Typography>
          <Typography
            sx={{ textAlign: 'justify', columnCount: 2, columnGap: 3 }}
            mb={{ xs: 3, md: 6 }}
          >
            {language === 'ua' ? content.text.ua : content.text.en}
          </Typography>
          <Grid container columnSpacing={3} rowSpacing={{ xs: 3, lg: 6 }}>
            {content.list.map((jury) => (
              <Grid item xs={12} md={6} lg={4}>
                <Box
                  component="img"
                  src={jury.photo}
                  sx={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    aspectRatio: { xs: '1/1', lg: '2/2.9' },
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    marginBottom: 3,
                  }}
                />
                <Stack
                  direction="row"
                  gap="5px"
                  alignItems="baseline"
                  mb={{ xs: 3, lg: 2 }}
                >
                  <Typography variant="subhead" component="h3">
                    {language === 'ua' ? jury.name.ua : jury.name.en}
                  </Typography>
                  {jury.position && (
                    <Typography>
                      ({language === 'ua' ? jury.position.ua : jury.position.en}
                      )
                    </Typography>
                  )}
                </Stack>
                <Box sx={{ width: '100%', textAlign: 'end' }}>
                  <Button
                    variant="tertiary"
                    component={Link}
                    to="/"
                    endIcon={
                      <SvgSpriteIcon
                        icon="arrow"
                        sx={{ transform: 'rotate(-90deg)' }}
                      />
                    }
                  >
                    {t('jury.read_more')}
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaJury;
