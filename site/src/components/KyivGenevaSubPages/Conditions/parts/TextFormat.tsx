import { Box, Grid, Typography } from '@mui/material';
import { RichText } from '../KyivGenevaConditions';
import { IConditionsData } from '@/types/kyivGenevaDataTypes';

export default function TextFormat({ title, text }: IConditionsData) {
  return (
    <Box sx={{ mb: { xs: '-8px', lg: '-16px' } }}>
      <Typography
        sx={{ mt: { xs: '24px', md: '48px' }, mb: '24px' }}
        component={'h3'}
        variant='h3'>
        {title}
      </Typography>
      <Grid container spacing={{ md: 0, lg: 3 }}>
        <Grid item lg={6}>
          {text.slice(0, text.length / 2).map((text, index) => (
            <Box key={index}>
              {text.h4 && (
                <Typography
                  sx={{ mb: '16px' }}
                  component={'h4'}
                  variant='subhead'>
                  {text.h4}
                </Typography>
              )}
              <RichText variant='bodyRegular'>
                {text.p}
                {text.list?.map((item, index) => (
                  <Typography component={'p'} variant='bodyRegular' key={index}>
                    {item}
                  </Typography>
                ))}
              </RichText>
            </Box>
          ))}
        </Grid>
        <Grid item lg={6}>
          {text.slice(text.length / 2).map((text, index) => (
            <RichText key={index} variant='bodyRegular'>
              {text.p}
            </RichText>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
