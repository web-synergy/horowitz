import PageTemplate from '@/components/Common/PageTemplate';
import { Container, Typography } from '@mui/material';
import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';
import TextBlockComponent from '@/components/Templates/TextBlockComponent/TextBlockComponent';

const Professor = () => {
  const { professors } = useAnnualSummerSchoolStore();

  if (!professors) {
    return null;
  }
  //add logic for finding current professor
  const professor = professors[0];
  console.log(professor);

  return (
    <PageTemplate>
      <Container>
        <Typography variant="h1" mb={1} sx={{ textTransform: 'capitalize' }}>
          {professor.name}
        </Typography>
        <Typography
          variant="subhead"
          component={'p'}
          color={(theme) => theme.palette.neutral[60]}
          mb={{ xs: 3, md: 5, lg: 6 }}
        >
          {professor.instrument.toLowerCase()}
        </Typography>
        <TextBlockComponent
          textArray={professor.about}
          img={professor.avatar}
        />
      </Container>
    </PageTemplate>
  );
};

export default Professor;
