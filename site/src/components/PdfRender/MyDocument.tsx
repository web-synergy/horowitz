import { useEffect, useState } from 'react';
import { theme } from '@/theme';
import { Box, useMediaQuery } from '@mui/material';

import { Document, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import Loader from '../Common/Loader';
import DownloadPdfButton from './parts/DownloadPdfButton';
import { getPgfSize } from './parts/helpers';
import FlipBookPdf from './parts/FlipBookPdf';
import SwiperPdf from './parts/SwiperPdf';

import { IFileResponse } from '@/types/pdfTypes';

const PDFReader = ({ title, URL }: IFileResponse) => {
  const [pageNumber, setPageNumber] = useState<number[]>([]);
  const [isOnePage, setIsOnePage] = useState(true);
  const [loading, setLoading] = useState(false);

  const isMd = useMediaQuery(theme.breakpoints.down('lg'));
  const [pdfSize, setPdfSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

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
        const { pdfHeight, pdfWidth, windowWidth } = getPgfSize(
          width,
          height,
          minusHeader
        );
        if (pdfWidth * 2 > windowWidth || windowWidth < 768) {
          setIsOnePage(true);
        } else {
          setIsOnePage(false);
        }
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
  }, [URL]);

  if (loading) return <Loader />;
  if (!pdfSize.width) return;
  return (
    <Box
      sx={{
        mt: '16px',
        mb: { xs: '56px', lg: '72px' },
      }}>
      <DownloadPdfButton pdfUrl={URL} title={title} />
      <Box
        sx={{
          width: `${isOnePage ? pdfSize.width : pdfSize.width * 2}px`,
          height: `${pdfSize.height}px`,
        }}>
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
    </Box>
  );
};

export default PDFReader;
