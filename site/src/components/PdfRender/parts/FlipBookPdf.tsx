// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { PagePdf } from './PagePdf';
import ZoomImage from '@/components/Common/ZoomImage';
import { Box, Stack } from '@mui/material';
import '../../PortableComponent/Swiper/sliderStyles.css';
import { IPdfViewer } from '@/types/pdfTypes';
export default function FlipBookPdf({
  pdfSize,
  pageNumber,
  isOnePage,
}: IPdfViewer) {
  const flipBookRef = useRef(null);

  const [end, setEnd] = useState(4);

  const nextButtonClick = () => {
    flipBookRef?.current?.pageFlip().flipNext();
  };

  const prevButtonClick = () => {
    flipBookRef?.current?.pageFlip().flipPrev();
  };

  const onPage = e => {
    const currentPage = e.data;

    const pageCounter = (): number => {
      const lastPage = pageNumber.length;
      let result = 0;
      if (currentPage + end > lastPage) {
        result = lastPage;
      } else {
        result = currentPage + 4;
      }
      return result;
    };
    setEnd(pageCounter());
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 5,
          top: '50%',
          bottom: '50%',
          width: '100%',
        }}>
        <Stack
          sx={{ width: '100%' }}
          flexDirection={'row'}
          justifyContent={'space-between'}>
          <Box>
            <div
              aria-label='Previous page'
              className='swiper-button-prev'
              onClick={prevButtonClick}></div>
          </Box>
          <Box>
            <div
              aria-label='Next page'
              className='swiper-button-next'
              onClick={nextButtonClick}></div>
          </Box>
        </Stack>
      </Box>
      <ZoomImage>
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
          {pageNumber.slice(0, end).map(page => (
            <PagePdf
              isOnePage={isOnePage}
              pdfSize={pdfSize}
              key={page}
              pageNumber={page}
            />
          ))}
        </HTMLFlipBook>
      </ZoomImage>
    </Box>
  );
}
