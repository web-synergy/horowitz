import { RoundMemberData } from '@/libs/mockedData';
import { CirclesType } from '@/utils/arrangeCircles';
import Image from '../Common/Image';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { Box } from '@mui/material';
import person from './person.png';

interface MemberProps extends RoundMemberData, CirclesType {}

export const Member = ({
  l,
  d,
  x,
  y,
  name,
  years,
  group,
  isBig,
  shiftY,
  shiftX,
  image,
}: MemberProps) => {
  const ratio = l === 1 ? 1.08 : 1;
  const itemShiftY = shiftY || 1;
  const itemShiftX = shiftX || 1;

  if (isBig) {
    return (
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: d * 1.5,
          height: d * 1.5,
          borderRadius: '50%',

          transform: `translate(${x * ratio - (d * itemShiftX) / 2}px, ${
            y * ratio - (d * itemShiftY) / 2
          }px)`,
        }}
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
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: d * 1.1,
        height: d * 1.1,
        borderRadius: '50%',

        transform: `translate(${x * ratio - (d * itemShiftX) / 2}px, ${
          y * ratio - (d * itemShiftY) / 2
        }px)`,
      }}
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
