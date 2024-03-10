import { FC } from 'react';
import { Box } from '@mui/material';
import GrowView from '../Common/GrowView';

interface GridTemplateProps<T> {
  list: T[];
  gridItem: FC<{ item: T }>;
  justify?: 'center' | 'left';
}

function GridTemplate<T>(props: GridTemplateProps<T>) {
  const { gridItem: GridItem, list, justify = 'left' } = props;

  const isCentered = justify !== 'left';

  return (
    <Box
      sx={{
        display: isCentered ? 'flex' : 'grid',
        columnGap: 3,
        rowGap: { xs: 3, md: 5, lg: 6 },
        justifyContent: 'center',
        gridTemplateColumns: 'repeat(auto-fill, minmax(288px, 1fr))',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {list.map((item, index) => (
        <GrowView key={index}>
          <Box
            sx={{
              minWidth: 288,
              width: isCentered ? { xs: '45%', md: '30%' } : '100%',
              maxWidth: { xs: 320, md: 350, lg: 355 },
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
