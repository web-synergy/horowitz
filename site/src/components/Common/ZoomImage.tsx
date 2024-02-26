import QuickPinchZoom, { make3dTransformValue } from 'react-quick-pinch-zoom';

import { useCallback, useRef } from 'react';
import { Box } from '@mui/material';
const ZoomImage = ({ children }: { children: React.ReactElement }) => {
  const imgRef = useRef<HTMLDivElement>();

  const onUpdate = useCallback(
    ({ x, y, scale }: { x: number; y: number; scale: number }) => {
      const { current: img } = imgRef;

      if (img) {
        const value = make3dTransformValue({ x, y, scale });

        img.style.setProperty('transform', value);
      }
    },
    []
  );

  return (
    <QuickPinchZoom
      maxZoom={3}
      inertiaFriction={0.96}
      tapZoomFactor={1}
      zoomOutFactor={1.6}
      doubleTapZoomOutOnMaxScale={true}
      centerContained={true}
      onUpdate={onUpdate}
      lockDragAxis={true}>
      <Box ref={imgRef}>{children}</Box>
    </QuickPinchZoom>
  );
};
export default ZoomImage;
