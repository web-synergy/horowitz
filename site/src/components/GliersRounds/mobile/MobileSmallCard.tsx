import { MouseEvent } from 'react';
import { Box } from '@mui/material';

interface MobileSmallCardProps {
  width: number;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
  top: number;
  left: number;
  name: string;
  years: string;
  group: 1 | 2;
  id: number;
}

export const MobileSmallCard = ({
  left,
  width,
  top,
  onClick,
  name,
  id,
  years,
  group,
}: MobileSmallCardProps) => {
  return (
    <Box
      role="button"
      data-id={id}
      sx={{
        position: 'absolute',
        top,
        left,
        width: width * 1.08,
        height: width * 1.08,
        borderRadius: '50%',
        cursor: 'pointer',
      }}
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
          <textPath href="#circlePath" fontSize={'85%'} fontWeight="bold">
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
