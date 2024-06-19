import { useState, useEffect, useRef, TouchEvent } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { Document, pdfjs } from 'react-pdf';
import { useDoubleTap } from 'use-double-tap';
import PdfPage from './parts/PdfPage';

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import Loader from '../../Common/Loader';
import { getPgfSize } from './parts/helpers';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { IFileResponse } from '@/types/pdfTypes';
import NavigationBtn from './parts/NavigationBtn';

const PDFReader = ({ URL }: IFileResponse) => {
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { containerRef, containerSize } = useWidthBlokSize();
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const [animation, setAnimation] = useState(true);
  const [moveStart, setMoveStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));
  const slideRef = useRef(null);

  useEffect(() => {
    if (isZoomed) {
      setIsZoomed(false);
      setPosition({ x: 0, y: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, isNotMobile]);

  const pdfSize = getPgfSize(containerSize);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setTotalPages(numPages);
  };

  const onClickPrev = (value?: number) => {
    if (currentPage === 1) {
      return;
    }
    setAnimation(false);
    setDirection('left');

    setTimeout(() => {
      setDirection('right');
      setCurrentPage((prev) => {
        if (prev === 1) return prev;
        return value ? value : prev - 1;
      });
      setAnimation(true);
    }, 500);
  };
  const onClickNext = (value?: number) => {
    if (currentPage === totalPages) {
      return;
    }
    setDirection('right');
    setAnimation(false);

    setTimeout(() => {
      setDirection('left');
      setAnimation(true);
      setCurrentPage((prev) => {
        if (prev === totalPages) {
          return prev;
        }
        return value ? value : prev + 1;
      });
    }, 500);
  };

  const onChangeCurrentPage = (value: number) => {
    if (value !== currentPage) {
      if (value > currentPage) {
        onClickNext(value);
      } else {
        onClickPrev(value);
      }
    }
  };

  const onDoubleClick = useDoubleTap(() => {
    if (isNotMobile) {
      return;
    }
    setIsZoomed((prev) => !prev);
    setPosition({ x: 0, y: 0 });
    setMoveStart({ x: 0, y: 0 });
  });

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e.targetTouches[0];
    setIsMoving(true);
    setMoveStart({ x: clientX - position.x, y: clientY - position.y });
  };

  const onTouchEnd = () => {
    setIsMoving(false);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isZoomed) {
      return;
    }

    if (isMoving) {
      const { clientX, clientY } = e.targetTouches[0];
      const positionX = clientX - moveStart.x;
      const positionY = clientY - moveStart.y;
      const rangeX = pdfSize.width * 1.5 - pdfSize.width;
      const rangeY = pdfSize.height * 1.5 - pdfSize.height;
      const renderPositionX = Math.max(Math.min(positionX, 0), -rangeX);
      const renderPositionY = Math.max(Math.min(positionY, 0), -rangeY);

      setPosition({
        x: renderPositionX,
        y: renderPositionY,
      });
    }
  };

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
          loading={<Loader />}
          onLoadError={(e) => console.log(e.message)}
        >
          <Box
            ref={slideRef}
            sx={{
              width: pdfSize.width,
              height: pdfSize.height,
              overflow: 'hidden',
            }}
            {...onDoubleClick}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onTouchMove={onTouchMove}
          >
            <PdfPage
              animation={animation}
              currentPage={currentPage}
              direction={direction}
              isZoomed={isZoomed}
              pdfSize={pdfSize}
              position={position}
              slideRef={slideRef}
            />
          </Box>
        </Document>
      </Box>
    </Box>
  );
};

export default PDFReader;
