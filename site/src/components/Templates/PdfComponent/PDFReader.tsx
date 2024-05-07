import { useState } from 'react';

import { Box } from '@mui/material';

import { Document, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import Loader from '../../Common/Loader';
import DownloadPdfButton from './parts/DownloadPdfButton';
import { getPgfSize } from './parts/helpers';

import SwiperPdf from './parts/SwiperPdf';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { IFileResponse } from '@/types/pdfTypes';

const PDFReader = ({ URL }: IFileResponse) => {
  const [numPages, setNumPages] = useState<number>(0);
  const { containerRef, containerSize } = useWidthBlokSize();

  const pdfSize = getPgfSize(containerSize);

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
          <SwiperPdf pageNumber={pagesArray} pdfSize={pdfSize} />
        </Document>
      </Box>
    </>
  );
};

export default PDFReader;
