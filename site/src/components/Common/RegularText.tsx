import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { transformText } from '@/utils/transfromText';

type RegularTextProps = {
  text: string;
  columnCount?: 1 | 2;
};
export const RegularText: FC<RegularTextProps> = ({
  text,
  columnCount = 2,
}) => {
  const textArray = transformText(text);

  return (
    <Box
      sx={{
        columnCount: { xs: 1, lg: columnCount },
        '& p:not(:last-child)': {
          marginBottom: '16px',
        },
      }}
    >
      {textArray.map((text, idx) => (
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
