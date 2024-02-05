import { Box, Container, Link, Typography, styled } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { Conditions } from '@/assets/kyiv-geneva/main/KyivGenevaConditions';
import TextFormat from './parts/TextFormat';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { Link as RouterLink } from 'react-router-dom';
import { theme } from '@/theme';

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
        <Box sx={{ py: '120px' }}>
          <Typography variant='h1'>Умови конкурсу</Typography>
          {Conditions.map((item, index) => (
            <TextFormat key={index} title={item.title} text={item.text} />
          ))}
          <Link
            component={RouterLink}
            to='/kyiv-geneva'
            sx={{
              color: theme => theme.palette.neutral[60],
            }}>
            <SvgSpriteIcon sx={{ transform: 'rotate(90deg)' }} icon='arrow' />
            Повернутись до Конкурс Горовиця Київ-Женева
          </Link>
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaConditions;
