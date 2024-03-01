import { debounce } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

export const useWidthBlokSize = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState(0);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerSize(containerRef.current.offsetWidth);
      }
    };
    updateContainerWidth();
    const debouncedUpdateContainerWidth = debounce(updateContainerWidth, 400);
    window.addEventListener('resize', debouncedUpdateContainerWidth);
    return () => {
      window.removeEventListener('resize', debouncedUpdateContainerWidth);
    };
  }, [containerRef.current]);

  return { containerSize, containerRef };
};
