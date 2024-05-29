import { FC } from 'react';
import { Box, Typography } from '@mui/material';

type RegularTextProps = {
  blocks: string[];
};
export const RegularText: FC<RegularTextProps> = ({ blocks }) => {
  return (
    <Box
      sx={{
        columnCount: { xs: 1, lg: 2 },
        '& p:not(:last-child)': {
          marginBottom: '16px',
        },
      }}
    >
      {blocks.map((text, idx) => (
        <Typography
          variant="bodyRegular"
          component={'p'}
          key={idx}
          sx={{
            textAlign: 'justify',
          }}
        >
          {text}
        </Typography>
      ))}
    </Box>
  );
};
