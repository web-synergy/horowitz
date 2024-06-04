import React from 'react';
import { Box, Collapse } from '@mui/material';
import { RegularText } from '@/components/Common/RegularText';
import { transformText } from '@/utils/transfromText';

export interface LiteratureSectionProps {
  literature: string;
  isAllLiteratureVisible: boolean;
}

const LiteratureSection: React.FC<LiteratureSectionProps> = ({
  literature,
  isAllLiteratureVisible,
}) => {
  const literatureArray = transformText(literature);
  const staticLiterature = literatureArray.slice(0, 5).join('\n');
  const collapseLiterature = literatureArray.slice(5).join('\n');
  return (
    <Box
      sx={{
        paddingTop: 3,
      }}
    >
      <RegularText text={staticLiterature} columnCount={1} />
      <Collapse in={isAllLiteratureVisible} timeout={1000}>
        <RegularText text={collapseLiterature} columnCount={1} />
      </Collapse>
    </Box>
  );
};

export default LiteratureSection;
