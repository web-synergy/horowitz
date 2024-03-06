import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import HTMLFlipBook from 'react-pageflip';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { Box, Button, useMediaQuery } from '@mui/material';

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
const PagePdf = React.forwardRef(
  ({ pageNumber, pdfSize, isOnePage }: { pageNumber: number }, ref) => {
    return (
      <Box
        sx={{
          boxShadow: isOnePage ? 'none' : '0px 0px 4px rgba(0, 0, 0, 0.2)',
          overflow: isOnePage ? 'none' : 'hidden',
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
  const [pageNumber, setPageNumber] = useState<number[]>();
  const [isOnePage, setIsOnePage] = useState(true);
  const [isZoom, setIsZoom] = useState(false);
  const [scale, setScale] = useState(1);
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(null);
  const startPosition = useRef({ x: 0, y: 0 });

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
  useEffect(() => {
    const iszoom = scale <= 1;
    if (iszoom) {
      setIsZoom(false);
      setScale(1);
    } else {
      setIsZoom(true);
    }
  }, [scale]);

  const handleMouseDown = event => {
    startPosition.current = {
      x: event.clientX,
      y: event.clientY,
    };
  };

  const handleMouseMove = event => {
    let deltaX = event.clientX;
    let deltaY = event.clientY;
    if (!isZoom) {
      deltaX = 0;
      deltaY = 0;
    } else {
      deltaX = event.clientX - startPosition.current.x;
      deltaY = event.clientY - startPosition.current.y;
    }

    const image = imageRef.current;
    if (image) {
      image.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }
  };

  const handleMouseUp = event => {
    let deltaX = event.clientX;
    let deltaY = event.clientY;
    if (!isZoom) {
      deltaX = 0;
      deltaY = 0;
    } else {
      deltaX = event.clientX - startPosition.current.x;
      deltaY = event.clientY - startPosition.current.y;
    }

    const image = imageRef.current;
    if (image) {
      image.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }
  };
  const handleTouchStart = event => {
    const touch = event.touches[0];
    // console.log(startPosition.current.x);
    if (startPosition.current.x == 0)
      startPosition.current = {
        x: touch.clientX,
        y: touch.clientY,
      };
  };

  const handleTouchMove = event => {
    event.preventDefault();
    const touch = event.touches[0];
    let deltaX = touch.clientX;
    let deltaY = touch.clientY;
    if (!isZoom) {
      deltaX = 0;
      deltaY = 0;
    } else {
      deltaX = touch.clientX - startPosition.current.x;
      deltaY = touch.clientY - startPosition.current.y;
    }

    const image = imageRef.current;
    if (image) {
      image.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }
  };

  const handleTouchEnd = event => {
    const touch = event.changedTouches[0];
    let deltaX = touch.clientX;
    let deltaY = touch.clientY;
    if (!isZoom) {
      deltaX = 0;
      deltaY = 0;
    } else {
      deltaX = touch.clientX - startPosition.current.x;
      deltaY = touch.clientY - startPosition.current.y;
    }

    // Additional logic for touch end if needed
  };
  const image = imageRef.current;
  if (image) {
    image.addEventListener('touchstart', handleTouchStart);
    image.addEventListener('touchmove', handleTouchMove);
    image.addEventListener('touchend', handleTouchEnd);
  }

  const handelClickZoom = () => {
    if (isZoom) {
      setScale(1);
    } else {
      setScale(scale + 0.8);
    }
  };
  console.log(pageNumber);
  const isOnePageZoomSsze = isOnePage ? 0.8 : 2 * 0.8;
  if (loading) return <Loader />;
  if (!pdfSize.width) return;
  return (
    <Box
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      sx={{
        overflow: 'hidden',
        transform: `scale(${scale})`,
        mb: 7,
      }}>
      <DownloadPdfButton pdfUrl={file} name={'document'} />
      <Box
        onMouseDown={handleMouseDown}
        ref={imageRef}
        sx={{
          width: `${isOnePage ? pdfSize.width : pdfSize.width * 2}px`,
          height: `${pdfSize.height}px`,
        }}>
        <Box
          onTouchMove={e => e.stopPropagation()}
          onClick={handelClickZoom}
          sx={{
            cursor: isZoom ? 'zoom-out' : 'zoom-in',
            position: 'absolute',
            width: isZoom ? '100vw' : `${pdfSize.width * isOnePageZoomSsze}px`,
            height: isZoom ? '100vh' : `${pdfSize.height}px`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}></Box>
        <Document file={file}>
          {!isOnePage ? (
            <HTMLFlipBook
              autoSize={false}
              flippingTime={700}
              maxShadowOpacity={0.1}
              mobileScrollSupport={true}
              height={pdfSize.height}
              width={pdfSize.width}>
              {pageNumber?.map(page => (
                <PagePdf
                  isOnePage={isOnePage}
                  pdfSize={pdfSize}
                  key={page}
                  pageNumber={page}
                />
              ))}
            </HTMLFlipBook>
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
