import { Grow } from '@mui/material';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function GrowView({
  children,
  timeout = 2100,
  threshold = 0.1,
}: {
  children: React.ReactElement;
  timeout?: number;
  threshold?: number;
}) {
  const [grow, setGrow] = useState(false);
  const { ref, inView } = useInView({
    threshold,
  });
  useEffect(() => {
    if (inView) {
      setGrow(true);
    }
  }, [inView]);

  return (
    <Grow ref={ref} in={grow} timeout={timeout}>
      {children}
    </Grow>
  );
}
