import { MouseEvent } from 'react';
import Image from '@/components/Common/Image';
import { Box } from '@mui/material';
import person from '../person.png';

interface TeacherCardProps {
  width: number;
  left: number | string;
  top: number;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
  group: 1 | 2;
  name: string | undefined;
  years: string | undefined;
  image: string | undefined;
  id: number | undefined;
}

export const MobileTeacherCard = ({
  width,
  top,
  left,
  onClick,
  group,
  image,
  name,
  years,
  id,
}: TeacherCardProps) => {
  return (
    <Box
      role="button"
      sx={{
        position: 'absolute',
        top,
        left,
        width: width,
        height: width,
        borderRadius: '50%',
        cursor: 'pointer',
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

          border: '1px solid',
          borderColor: (theme) =>
            group === 1
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
        }}
      >
        <Image
          width={width}
          height={width}
          src={image || person}
          isLazyLoading={false}
          alt={name}
          styles={{
            objectFit: 'cover',
            objectPosition: 'center',
            aspectRatio: 1,
            width: '100%',
            height: 'auto',
          }}
        />
      </Box>
    </Box>
  );
};
