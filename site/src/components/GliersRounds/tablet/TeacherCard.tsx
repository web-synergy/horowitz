import { MouseEvent } from 'react';
import { Box } from '@mui/material';
import Image from '../../Common/Image';
import person from '../person.png';
import { CirclesType } from '@/utils/arrangeTabletCircles';

interface TeacherCardProps extends CirclesType {
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

export const TeacherCard = ({
  top,
  width,
  left,
  group,
  name,
  years,
  image,
  onClick,
  id,
}: TeacherCardProps) => {
  return (
    <Box
      role="button"
      sx={{
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
        width: width,
        height: width,
        borderRadius: '50%',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.1)',
        },
        '&:active': {
          transform: 'scale(1.1)',
        },
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
          width: width * 0.7,
          height: width * 0.7,
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#efefef',
          borderRadius: '50%',
          overflow: 'clip',
        }}
      >
        <Image
          width={width * 0.7}
          height={width * 0.7}
          src={image || person}
          isLazyLoading={false}
          alt={name}
          styles={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </Box>
    </Box>
  );
};
