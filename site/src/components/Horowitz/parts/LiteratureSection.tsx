import React from 'react';
import { Box, Collapse } from '@mui/material';

import { PortableText } from '@portabletext/react';
import { collapsComponents, components } from '../portableComponents';
import { LiteratureSectionProps } from '@/types/horowitzTypes';

const LiteratureSection: React.FC<LiteratureSectionProps> = ({
  literature,
  isAllLiteratureVisible,
}) => {
  return (
    <Box
      sx={{
        paddingTop: 3,
      }}
    >
      <PortableText value={literature.slice(0, 4)} components={components} />
      <Collapse in={isAllLiteratureVisible} timeout={1000}>
        <PortableText
          value={literature.slice(4)}
          components={collapsComponents}
        />
      </Collapse>
    </Box>
  );
};

export default LiteratureSection;
