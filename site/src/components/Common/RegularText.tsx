import { FC } from 'react';
import { Box, Typography } from '@mui/material';

type RegularTextProps = {
  blocks: string[];
  columnCount?: 1 | 2;
};
export const RegularText: FC<RegularTextProps> = ({
  blocks,
  columnCount = 2,
}) => {
  return (
    <Box
      sx={{
        columnCount: { xs: 1, lg: columnCount },
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
