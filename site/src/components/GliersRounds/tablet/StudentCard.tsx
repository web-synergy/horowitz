import { MouseEvent } from 'react';
import { Box } from '@mui/material';
import { CirclesType } from '@/utils/arrangeTabletCircles';

interface StudentCardProps extends CirclesType {
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

export const StudentCard = ({
  top,
  width,
  left,
  group,
  name,
  years,
  id,
  onClick,
}: StudentCardProps) => {
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
            {name}
          </textPath>
        </text>
        <path
          d="M 15, 50 a 35,35 0 1,1 70,0 35,35 0 1,1 -70,0"
          fill="currentColor"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          fontSize={'55%'}
          fontWeight="bold"
          fill={'#fff'}
        >
          {years}
        </text>
      </Box>
    </Box>
  );
};
