import React from 'react';
import { Box, Collapse } from '@mui/material';
import TextBlockComponent from '@/components/Templates/TextBlockComponent/TextBlockComponent';
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
      <TextBlockComponent text={staticLiterature} column={1} gap={16} />
      <Collapse in={isAllLiteratureVisible} timeout={1000}>
        <TextBlockComponent text={collapseLiterature} column={1} gap={16} />
      </Collapse>
    </Box>
  );
};

export default LiteratureSection;
