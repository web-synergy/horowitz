import { PdfSize } from '@/types/pdfTypes';
import { Box } from '@mui/material';
import { forwardRef } from 'react';
import { Page } from 'react-pdf';

interface PagePdfProps {
  pageNumber: number;
  pdfSize: PdfSize;
  isOnePage: boolean;
}

export const PagePdf = forwardRef(
  ({ pageNumber, pdfSize, isOnePage }: PagePdfProps, ref) => {
    return (
      <Box
        sx={{
          boxShadow: isOnePage ? 'none' : '0px 0px 4px rgba(0, 0, 0, 0.2)',
          overflow: isOnePage ? 'none' : 'hidden',
        }}
        ref={ref}
      >
        <Page
          width={pdfSize.width}
          height={pdfSize.height}
          pageNumber={pageNumber}
        />
      </Box>
    );
  }
);
