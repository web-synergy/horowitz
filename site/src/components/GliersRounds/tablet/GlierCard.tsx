import { MouseEvent } from 'react';
import { CirclesType } from '@/utils/arrangeTabletCircles';
import { Box } from '@mui/material';
import Image from '../../Common/Image';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import person from '../person.png';

interface ClierCardProps extends CirclesType {
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

export const ClierCard = ({
  width,
  top,
  left,
  image,
  onClick,
  id,
  years,
  name,
}: ClierCardProps) => {
  const { containerRef, containerSize } = useWidthBlokSize();
  return (
    <Box
      role="button"
      sx={{
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
        width: width * 0.9,
        height: width * 0.9,
        borderRadius: '50%',
        backgroundImage:
          'linear-gradient(-15deg, rgba(11,45,163,1) 0%, rgba(217,161,69,1) 100%)',

        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.1)',
          zIndex: 10,
        },
        '&:active': {
          transform: 'scale(1.1)',
        },
      }}
      onClick={onClick}
      data-id={id}
    >
      <Box
        component="svg"
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        sx={{
          width: '130%',
          height: '130%',
          color: (theme) => theme.palette.primary.main,
          transform: 'translate(-11%, -11%);',
        }}
      >
        <path
          id="circlePath"
          fill="none"
          d="M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0"
        />
        <text width="100">
          <textPath href="#circlePath" fontSize={'70%'} fontWeight="bold">
            {name + ' ' + years}
          </textPath>
        </text>
        <path
          d="M 15, 50 a 35,35 0 1,1 70,0 35,35 0 1,1 -70,0"
          fill="transparent"
        />
      </Box>
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
