import { Box, Container, Stack, Typography } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { Rewards } from '@/assets/kyiv-geneva/main/KyivGenevaRewards';
import LinkGoBack from '@/components/Common/LinkGoBack';

const KyivGenevaRewards = () => {
  return (
    <PageTemplate>
      <Container>
        <Box sx={{ my: { xs: '48px', lg: '120px' } }}>
          {Rewards.map((item, index) => (
            <Stack spacing={{ xs: '24px', lg: '48px' }} key={index}>
              <Box>
                {item.h3 && (
                  <Typography component={'h3'} variant='h3'>
                    {item.h3}
                  </Typography>
                )}
                {item.p && (
                  <Typography
                    sx={{
                      mt: '24px',
                      mb: { xs: '24px', lg: '48px' },
                    }}
                    component={'p'}
                    variant='bodyRegular'>
                    {item.p}
                  </Typography>
                )}
              </Box>
              {item.listStrong?.map(obj =>
                Object.entries(obj).map(([key, value]) => (
                  <Stack key={value}>
                    <Typography
                      sx={{ textAlign: 'justify' }}
                      component={'p'}
                      variant='bodyRegular'>
                      <Typography variant='bodyMedium'>{key}</Typography>
                      {value}
                    </Typography>
                  </Stack>
                ))
              )}
              {item.list?.map((item, index) => (
                <Typography
                  sx={{ textAlign: 'justify' }}
                  component={'p'}
                  key={index}
                  variant='bodyRegular'>
                  {item}
                </Typography>
              ))}
            </Stack>
          ))}
          <Box sx={{ mt: '48px' }}>
            <LinkGoBack
              title='Повернутись до Конкурс Горовиця Київ-Женева'
              href='/kyiv-geneva'
            />
          </Box>
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaRewards;
