import { FC } from 'react';
import { Box } from '@mui/material';
import GrowView from '../Common/GrowView';

interface GridTemplateProps<T, P> {
  list: T[];
  gridItem: FC<{ item: T }>;
  justify?: 'center' | 'left';
  other?: P;
}

function GridTemplate<T, P>(props: GridTemplateProps<T, P>) {
  const { gridItem: GridItem, list, justify = 'left' } = props;

  const isCentered = justify !== 'left';

  return (
    <Box
      sx={{
        display: isCentered ? 'flex' : 'grid',
        columnGap: 3,
        rowGap: 7,
        justifyContent: 'space-evenly',
        gridTemplateColumns: {
          xs: 'repeat(auto-fit, minmax(288px, 1fr))',
          md: 'repeat(auto-fit,332px)',
          lg: 'repeat(auto-fit, minmax(357px, 1fr))',
        },
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {list.map((item, index) => (
        <GrowView key={index}>
          <Box
            sx={{
              minWidth: { xs: 288, md: 332, lg: 357 },
              width: isCentered ? { xs: '45%', md: '30%' } : '100%',
              maxWidth: { xs: 320, md: 350, lg: 357 },
              margin: '0 auto',
            }}
          >
            <GridItem item={item} />
          </Box>
        </GrowView>
      ))}
    </Box>
  );
}

export default GridTemplate;
