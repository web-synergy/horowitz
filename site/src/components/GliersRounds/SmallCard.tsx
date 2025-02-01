import { Box } from '@mui/material';

interface CardProps {
  itemShiftY: number;
  itemShiftX: number;
  ratio: number;
  onClick: () => void;
  x: number;
  d: number;
  y: number;
  group: number;
  name: string;
  years: string;
}

export const SmallCard = ({
  x,
  d,
  y,
  itemShiftX,
  itemShiftY,
  ratio,
  group,
  name,
  years,
  onClick,
}: CardProps) => {
  return (
    <Box
      role="button"
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: d * 1.1,
        height: d * 1.1,
        borderRadius: '50%',
        cursor: 'pointer',

        transform: `translate(${x * ratio - (d * itemShiftX) / 2}px, ${
          y * ratio - (d * itemShiftY) / 2
        }px)`,
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
