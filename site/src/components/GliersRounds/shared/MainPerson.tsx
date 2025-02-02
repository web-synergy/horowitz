import { RoundMemberData } from '@/libs/mockedData';
import { CirclesType } from '@/utils/arrangeCircles';
import { Box } from '@mui/material';
import Image from '../../Common/Image';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import glier from '../glier.jpg';

interface MainPersonProps extends RoundMemberData, CirclesType {}

export const MainPerson = ({ d }: MainPersonProps) => {
  const { containerRef, containerSize } = useWidthBlokSize();
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: d * 1.3,
        height: d * 1.3,
        borderRadius: '50%',
        backgroundImage:
          'linear-gradient(-15deg, rgba(11,45,163,1) 0%, rgba(217,161,69,1) 100%)',
        transform: 'translate(-50%, -50%)',
      }}
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
            src={glier}
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
