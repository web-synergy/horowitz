import Loader from '@/components/Common/Loader';
import { PdfSize } from '@/types/pdfTypes';
import { Box } from '@mui/material';
import { forwardRef } from 'react';
import { Page } from 'react-pdf';

interface PagePdfProps {
  pageNumber: number;
  pdfSize: PdfSize;
}

export const PagePdf = forwardRef(
  ({ pageNumber, pdfSize }: PagePdfProps, ref) => {
    return (
      <Box
        sx={{
          overflow: 'hidden',
        }}
        ref={ref}
      >
        <Page
          width={pdfSize.width}
          height={pdfSize.height}
          pageNumber={pageNumber}
          loading={Loader}
        />
      </Box>
    );
  }
);
