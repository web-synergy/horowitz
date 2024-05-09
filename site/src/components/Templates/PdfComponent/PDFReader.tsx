import { useState, useRef } from 'react';
import { Box } from '@mui/material';

import { Document, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import Loader from '../../Common/Loader';
import { getPgfSize } from './parts/helpers';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { IFileResponse } from '@/types/pdfTypes';
import SwiperPdf from './parts/SwiperPdf';
import NavigationBtn from './parts/NavigationBtn';

const PDFReader = ({ URL }: IFileResponse) => {
  const [numPages, setNumPages] = useState<number>(0);
  const { containerRef, containerSize } = useWidthBlokSize();
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);

  const pdfSize = getPgfSize(containerSize);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
  };

  const pagesArray = Array.from(
    { length: numPages || 0 },
    (_, index) => ++index
  );

  return (
    <Box>
      <NavigationBtn pdfUrl={URL} nextRef={nextRef} prevRef={prevRef} />
      <Box
        ref={containerRef}
        sx={{
          height: pdfSize.height,
          width: '100%',
          // mt: { xs: 9, md: '100px', lg: '108px' },
        }}
      >
        <Document
          file={URL}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={Loader}
          onLoadError={(e) => console.log(e.message)}
        >
          <SwiperPdf
            pageNumber={pagesArray}
            pdfSize={pdfSize}
            nextRef={nextRef}
            prevRef={prevRef}
          />
        </Document>
      </Box>
    </Box>
  );
};

export default PDFReader;
