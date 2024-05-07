import { useState } from 'react';

import { Box, useMediaQuery, useTheme, Stack, Typography } from '@mui/material';

import { Document, pdfjs, Page } from 'react-pdf';

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import Loader from '../../Common/Loader';
import DownloadPdfButton from './parts/DownloadPdfButton';
import { getPgfSize } from './parts/helpers';
// import FlipBookPdf from './parts/FlipBookPdf';
import SwiperPdf from './parts/SwiperPdf';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { IFileResponse } from '@/types/pdfTypes';

const PDFReader = ({ URL }: IFileResponse) => {
  const [numPages, setNumPages] = useState<number>(0);
  const { containerRef, containerSize } = useWidthBlokSize();

  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));

  const isOnePage = !isNotMobile;

  const pdfSize = getPgfSize(containerSize, isOnePage);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
  };

  const pagesArray = Array.from(
    { length: numPages || 0 },
    (_, index) => ++index
  );

  return (
    <>
      <DownloadPdfButton pdfUrl={URL} />
      <Box
        ref={containerRef}
        sx={{
          height: pdfSize.height,
          width: '100%',
        }}
      >
        <Document
          file={URL}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={Loader}
          onLoadError={(e) => console.log(e.message)}
        >
          <SwiperPdf
            isOnePage={isOnePage}
            pageNumber={pagesArray}
            pdfSize={pdfSize}
          />
        </Document>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography>Default render pdf</Typography>
        <Document
          file={URL}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={Loader}
        >
          <Stack gap={2}>
            {pagesArray.map((page) => (
              <Box sx={{ width: '100%' }} key={page}>
                <Page
                  pageNumber={page}
                  loading={Loader}
                  width={containerSize}
                />
              </Box>
            ))}
          </Stack>
        </Document>
      </Box>
    </>
  );
};

export default PDFReader;
