import { Box } from '@mui/material';
import Image from '../../Common/Image';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import glier from '../glier.jpg';

interface MobileMainPersonProps {
  width: number;
  top: number;
  left: number;
  group: 1 | 2;
}

export const MobileMainPerson = ({
  width,
  group,
  left,
  top,
}: MobileMainPersonProps) => {
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
