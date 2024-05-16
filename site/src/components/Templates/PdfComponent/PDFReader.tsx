import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { SwiperClass } from 'swiper/react';
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
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { containerRef, containerSize } = useWidthBlokSize();
  const [controlledSwiper, setControlledSwiper] = useState<SwiperClass>();

  const onClickPrev = () => controlledSwiper && controlledSwiper.slidePrev();
  const onClickNext = () => controlledSwiper && controlledSwiper.slideNext();

  const onSlideChange = () => {
    if (!controlledSwiper) {
      return;
    }
    console.log('onSlideChange');
    console.log('activeIndex', controlledSwiper.activeIndex);
    setCurrentPage(controlledSwiper.activeIndex + 1 || 1);
  };

  const pdfSize = getPgfSize(containerSize);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setTotalPages(numPages);
  };

  const onChangeCurrentPage = (value: number) => {
    if (value !== currentPage) {
      setCurrentPage(value);
      controlledSwiper?.slideTo(value - 1);
    }
  };

  const pagesArray = Array.from(
    { length: totalPages || 0 },
    (_, index) => ++index
  );

  useEffect(() => {});
  return (
    <Box>
      <NavigationBtn
        pdfUrl={URL}
        currentPage={currentPage}
        onChangePage={onChangeCurrentPage}
        totalPages={totalPages}
        onClickNext={onClickNext}
        onClickPrev={onClickPrev}
      />
      <Box
        ref={containerRef}
        sx={{
          height: pdfSize.height,
          width: '100%',
          mt: 3,
        }}
      >
        <Document
          file={URL}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={Loader}
          onLoadError={(e) => console.log(e.message)}
        >
          <SwiperPdf
            pdfSize={pdfSize}
            pageNumber={pagesArray}
            controlledSwiper={controlledSwiper}
            onSlideChange={onSlideChange}
            setControlledSwiper={setControlledSwiper}
          />
        </Document>
      </Box>
    </Box>
  );
};

export default PDFReader;
