import QuickPinchZoom, { make3dTransformValue } from 'react-quick-pinch-zoom';

import { useCallback, useRef, useState } from 'react';
import { Box } from '@mui/material';

const ZoomImage = ({ children }: { children: React.ReactElement }) => {
  const imgRef = useRef<HTMLDivElement>();
  const [isZoomIn, setIsZoomIn] = useState(true);

  const onUpdate = useCallback(
    ({ x, y, scale }: { x: number; y: number; scale: number }) => {
      const { current: img } = imgRef;
      if (img) {
        const value = make3dTransformValue({ x, y, scale });
        // console.log(value);
        img.style.setProperty('transform', value);
      }
    },
    []
  );

  const onDoubleTap = () => {
    setIsZoomIn((prev) => !prev);
  };

  return (
    <QuickPinchZoom
      // maxZoom={2}
      // setOffsetsOnce={false}
      // inertiaFriction={0.96}
      // tapZoomFactor={1}
      // draggableUnZoomed={false}
      // zoomOutFactor={1.9}
      // doubleTapZoomOutOnMaxScale={true}
      doubleTapToggleZoom={true}
      centerContained={true}
      onUpdate={onUpdate}
      onDoubleTap={onDoubleTap}
    >
      <Box
        ref={imgRef}
        sx={{ cursor: isZoomIn ? 'zoom-in' : 'zoom-out', width: '100%' }}
      >
        {children}
      </Box>
    </QuickPinchZoom>
  );
};
export default ZoomImage;
