import { Box } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import image from '@/assets/images/kyiv-geneva/sponsors/partners-ua.jpeg';

const KyivGenevaSponsorsPage = () => {
  return (
    <PageTemplate>
      <Box>
        <Box
          component="img"
          src={image}
          sx={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </Box>
    </PageTemplate>
  );
};

export default KyivGenevaSponsorsPage;
