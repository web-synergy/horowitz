import { useEffect, useState } from 'react';

import { Box, useMediaQuery, useTheme } from '@mui/material';

import { Document, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import Loader from '../../Common/Loader';
import DownloadPdfButton from './parts/DownloadPdfButton';
import { getPgfSize } from './parts/helpers';
import FlipBookPdf from './parts/FlipBookPdf';
import SwiperPdf from './parts/SwiperPdf';

import { IFileResponse } from '@/types/pdfTypes';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';

const PDFReader = ({ URL }: IFileResponse) => {
  const [pageNumber, setPageNumber] = useState<number[]>([]);
  // const [isOnePage, setIsOnePage] = useState(true);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('lg'));
  const { containerRef, containerSize } = useWidthBlokSize();
  const [pdfSize, setPdfSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  const isOnePage = !isMd;
  const pfdHeight = Math.floor(
    isMd ? containerSize / 0.71 : containerSize * 0.71
  );
  console.log('containerRef', containerSize);
  console.log('pfdHeight', pfdHeight);

  const minusHeader = isMd ? 64 : 102;

  useEffect(() => {
    async function fetchPdfDimensions() {
      setLoading(true);
      try {
        const pdf = await pdfjs.getDocument(URL).promise;
        const page = await pdf.getPage(1);
        const newArray = Array.from(
          { length: pdf?._pdfInfo.numPages || 0 },
          (_, index) => ++index
        );
        setPageNumber(newArray);

        const { width, height } = page.getViewport({ scale: 1 });
        console.log('page', page);
        console.log('width', width);

        const { pdfHeight, pdfWidth, windowWidth } = getPgfSize(
          width,
          height,
          minusHeader
        );
        // if (pdfWidth * 2 > windowWidth || windowWidth < 768) {
        //   setIsOnePage(true);
        // } else {
        //   setIsOnePage(false);
        // }
        setPdfSize({
          width: pdfWidth,
          height: pdfHeight,
        });
      } catch (error) {
        console.error('Error fetching PDF dimensions:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPdfDimensions();
  }, [URL, minusHeader]);

  if (loading) return <Loader />;

  if (!pdfSize.width) return;

  return (
    <>
      <DownloadPdfButton pdfUrl={URL} />
      <Box
        ref={containerRef}
        sx={{
          // width: `${isOnePage ? pdfSize.width : pdfSize.width * 2}px`,
          // height: `${pdfSize.height}px`,
          width: '100%',
        }}
      >
        <Document file={URL}>
          {isOnePage ? (
            <SwiperPdf
              pdfSize={pdfSize}
              pageNumber={pageNumber}
              isOnePage={isOnePage}
            />
          ) : (
            <FlipBookPdf
              pdfSize={pdfSize}
              pageNumber={pageNumber}
              isOnePage={isOnePage}
            />
          )}
        </Document>
      </Box>
    </>
  );
};

export default PDFReader;
