import React, { useEffect, useRef, useState } from 'react';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import HTMLFlipBook from 'react-pageflip';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { Box, useMediaQuery } from '@mui/material';

import { Navigation, Keyboard, Zoom, EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Loader from '../Common/Loader';
import '../PortableComponent/Swiper/sliderStyles.css';
import DownloadPdfButton from './DownloadPdfButton';
import { theme } from '@/theme';
import { getPgfSize } from './helpers';
import ZoomImage from '../Common/ZoomImage';
const PagePdf = React.forwardRef(
  ({ pageNumber, pdfSize, isOnePage }: { pageNumber: number }, ref) => {
    return (
      <Box
        sx={{
          boxShadow: isOnePage ? 'none' : '0px 0px 4px rgba(0, 0, 0, 0.2)',
          // overflow: isOnePage ? 'none' : 'hidden',
        }}
        ref={ref}>
        <Page
          width={pdfSize.width}
          height={pdfSize.height}
          pageNumber={pageNumber}
        />
      </Box>
    );
  }
);

const PDFReader = ({ file }) => {
  const [totalPage, setTotalPage] = useState(0);
  const [pageNumber, setPageNumber] = useState<number[]>();
  const [isOnePage, setIsOnePage] = useState(true);
  const [loading, setLoading] = useState(false);
  const flipBookRef = useRef(null);
  const isMd = useMediaQuery(theme.breakpoints.down('lg'));
  const [pdfSize, setPdfSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  const minusHeader = isMd ? 64 : 102;

  const nextButtonClick = () => {
    flipBookRef?.current?.pageFlip().flipNext();
  };

  const prevButtonClick = () => {
    flipBookRef?.current?.pageFlip().flipPrev();
  };
  const onPage = e => {
    setTotalPage(e.data);
  };

  useEffect(() => {
    async function fetchPdfDimensions() {
      setLoading(true);
      try {
        const pdf = await pdfjs.getDocument(file).promise;
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
  }, [file]);

  if (loading) return <Loader />;
  if (!pdfSize.width) return;
  return (
    <Box
      sx={{
        mb: 7,
      }}>
      <DownloadPdfButton pdfUrl={file} name={'document'} />
      <Box
        sx={{
          width: `${isOnePage ? pdfSize.width : pdfSize.width * 2}px`,
          height: `${pdfSize.height}px`,
        }}>
        <Document file={file}>
          {!isOnePage ? (
            <ZoomImage>
              <button onClick={prevButtonClick}>Prev Page</button>
              <button onClick={nextButtonClick}>Next Page</button>
              <HTMLFlipBook
                ref={flipBookRef}
                onFlip={onPage}
                drawShadow={true}
                autoSize={false}
                flippingTime={700}
                maxShadowOpacity={0.1}
                disableFlipByClick={true}
                mobileScrollSupport={true}
                height={pdfSize.height}
                width={pdfSize.width}>
                {pageNumber?.slice(0, totalPage + 5).map(page => (
                  <PagePdf
                    isOnePage={isOnePage}
                    pdfSize={pdfSize}
                    key={page}
                    pageNumber={page}
                  />
                ))}
              </HTMLFlipBook>
            </ZoomImage>
          ) : (
            <Swiper
              modules={[Zoom, Navigation, Keyboard, EffectCreative]}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -900],
                },
                next: {
                  translate: ['100%', 0, 0],
                },
              }}
              effect={'creative'}
              speed={500}
              zoom={{
                maxRatio: 2,
                zoomedSlideClass: 'zoom',
              }}
              pagination={{ clickable: true }}
              keyboard={{
                enabled: true,
              }}
              navigation={true}
              slidesPerView={1}>
              {pageNumber.map((_, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className='swiper-zoom-container'>
                      <PagePdf
                        isOnePage={isOnePage}
                        pdfSize={pdfSize}
                        key={i}
                        pageNumber={i + 1}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Document>
      </Box>
    </Box>
  );
};

export default PDFReader;
