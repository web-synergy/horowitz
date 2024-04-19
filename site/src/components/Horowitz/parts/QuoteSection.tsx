import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Section } from '@/components/Contacts/styled';
import { QuoteType } from '@/types/horowitzTypes';

export interface QuoteSectionProps {
  quote: QuoteType;
}
const QuoteSection: React.FC<QuoteSectionProps> = ({ quote }) => {
  const theme = useTheme();

  return (
    <Section
      sx={{ backgroundColor: theme.palette.common.black }}
      component={'section'}
    >
      <Box
        sx={{
          textAlign: 'center',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: { xs: '24px 16px', md: '72px 54px', lg: '148px 172px' },
        }}
      >
        <Typography
          variant="h1"
          component="p"
          sx={{
            marginBottom: {
              color: theme.palette.common.white,
              xs: '16px',
              md: '32px',
              lg: '24px',
            },
          }}
        >
          {quote.quote}
        </Typography>
        <Typography
          variant="subhead"
          sx={{
            color: theme.palette.primary.main,
          }}
        >
          {quote.author}
        </Typography>
      </Box>
    </Section>
  );
};

export default QuoteSection;
