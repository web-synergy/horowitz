import { FC, MutableRefObject } from 'react';
import { Box, Slide } from '@mui/material';
import { Page } from 'react-pdf';

import { PdfSize } from '@/types/pdfTypes';

interface PDfPageProps {
  currentPage: number;
  pdfSize: PdfSize;
  isZoomed: boolean;
  animation: boolean;
  position: { x: number; y: number };
  direction: 'left' | 'right';
  slideRef: MutableRefObject<HTMLDivElement | null>;
}

const PdfPage: FC<PDfPageProps> = ({
  currentPage,
  pdfSize,
  animation,
  isZoomed,
  position,
  direction,
  slideRef,
}) => {
  return (
    <Box
      sx={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${
          isZoomed ? 1.5 : 1
        })`,
        transformOrigin: '0 0',
        transition: 'transform 0.3s',
        touchAction: 'none',
      }}
    >
      <Slide
        in={animation}
        container={slideRef.current}
        direction={direction}
        appear={false}
      >
        <Box>
          <Page
            width={pdfSize.width}
            height={pdfSize.height}
            pageNumber={currentPage}
            loading={<Box />}
          />
        </Box>
      </Slide>
    </Box>
  );
};

export default PdfPage;
