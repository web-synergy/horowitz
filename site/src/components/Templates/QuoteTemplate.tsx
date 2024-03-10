import { FC } from 'react';
import { Box, Typography } from '@mui/material';

interface QuoteTemplateProps {
  quote: string;
  author: string;
}

const QuoteTemplate: FC<QuoteTemplateProps> = ({ quote, author }) => {
  return (
    <Box
      sx={{ backgroundColor: (theme) => theme.palette.common.black }}
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
            color: (theme) => theme.palette.common.white,
            marginBottom: {
              xs: '16px',
              md: '32px',
              lg: '24px',
            },
          }}
        >
          {quote}
        </Typography>
        <Typography
          variant="subhead"
          sx={{
            color: (theme) => theme.palette.primary.main,
          }}
        >
          — {author}
        </Typography>
      </Box>
    </Box>
  );
};

export default QuoteTemplate;
