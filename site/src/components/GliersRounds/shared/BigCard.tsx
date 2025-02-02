import { MouseEvent } from 'react';
import { Box } from '@mui/material';
import Image from '../../Common/Image';
import person from '../person.png';

interface CardProps {
  itemShiftY: number;
  itemShiftX: number;
  ratio: number;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
  x: number;
  d: number;
  y: number;
  group: number;
  name: string;
  years: string;
  image: string | undefined;
  id: number;
}

export const BigCard = ({
  x,
  d,
  y,
  itemShiftX,
  itemShiftY,
  ratio,
  group,
  name,
  years,
  image,
  onClick,
  id,
}: CardProps) => {
  return (
    <Box
      role="button"
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: d * 1.5,
        height: d * 1.5,
        borderRadius: '50%',
        cursor: 'pointer',

        transform: `translate(${x * ratio - (d * itemShiftX) / 2}px, ${
          y * ratio - (d * itemShiftY) / 2
        }px)`,
      }}
      data-id={id}
      onClick={onClick}
    >
      <Box
        component="svg"
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        sx={{
          color: (theme) =>
            group === 1
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
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
          fill="currentColor"
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: d * 1.05,
          height: d * 1.05,
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#efefef',
          borderRadius: '50%',
          overflow: 'clip',
        }}
      >
        <Image
          width={d * 1.05}
          height={d * 1.05}
          src={image || person}
          isLazyLoading={false}
          alt={name}
          styles={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </Box>
    </Box>
  );
};
