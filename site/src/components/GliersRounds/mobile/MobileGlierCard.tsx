import { MouseEvent } from 'react';
import { Box } from '@mui/material';
import Image from '../../Common/Image';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import person from '../person.png';

interface MobileGlierCardProps {
  width: number;
  top: number;
  left: number;
  group: 1 | 2;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
  id: number;
  image?: string;
}

export const MobileGlierCard = ({
  width,
  group,
  left,
  top,
  onClick,
  id,
  image,
}: MobileGlierCardProps) => {
  const { containerRef, containerSize } = useWidthBlokSize();
  const color = group === 1 ? ' rgba(217,161,69,1)' : 'rgba(11,45,163,1)';
  return (
    <Box
      sx={{
        position: 'absolute',

        left,
        top,

        width: width,
        height: width,
        borderRadius: '50%',
        backgroundColor: color,
        cursor: 'pointer',
        '&:active': {
          transform: 'scale(1.1)',
        },
      }}
      onClick={onClick}
      data-id={id}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          aspectRatio: 1,
          borderRadius: '50%',
          height: 'auto',
          backgroundColor: (theme) => theme.palette.background.paper,
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          ref={containerRef}
          sx={{
            width: '90%',
            height: '90%',
            backgroundColor: (theme) => theme.palette.action.hover,
            borderRadius: '50%',
            overflow: 'clip',
          }}
        >
          <Image
            width={containerSize}
            height={containerSize}
            alt="Glier photo"
            src={image || person}
            styles={{
              objectFit: 'cover',
              objectPosition: 'top',
              width: '100%',
              height: '100%',
            }}
            isLazyLoading={false}
          />
        </Box>
      </Box>
    </Box>
  );
};
