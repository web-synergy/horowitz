import { Box, Container, Typography, styled } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { Conditions } from '@/assets/kyiv-geneva/main/KyivGenevaConditions';
import TextFormat from './parts/TextFormat';
import { theme } from '@/theme';
import LinkGoBack from '@/components/Common/LinkGoBack';

export const RichText = styled(Typography)(() => ({
  display: 'block',
  textAlign: 'justify',
  marginBottom: '8px',
  [theme.breakpoints.up('lg')]: {
    marginBottom: '16px',
  },
}));
const KyivGenevaConditions = () => {
  return (
    <PageTemplate>
      <Container>
        <Box sx={{ my: { xs: '48px', lg: '120px' } }}>
          <Typography variant='h1'>Умови конкурсу</Typography>
          {Conditions.map((item, index) => (
            <TextFormat key={index} title={item.title} text={item.text} />
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

export default KyivGenevaConditions;
