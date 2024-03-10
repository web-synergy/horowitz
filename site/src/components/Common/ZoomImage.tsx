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
      maxZoom={2}
      setOffsetsOnce={false}
      inertiaFriction={0.96}
      tapZoomFactor={1}
      draggableUnZoomed={false}
      zoomOutFactor={1.9}
      doubleTapZoomOutOnMaxScale={true}
      centerContained={true}
      onUpdate={onUpdate}>
      <Box ref={imgRef}>{children}</Box>
    </QuickPinchZoom>
  );
};
export default ZoomImage;
