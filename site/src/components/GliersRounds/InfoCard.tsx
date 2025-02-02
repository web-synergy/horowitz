import { Box, Typography, useTheme, IconButton } from '@mui/material';
import SvgSpriteIcon from '../Common/SvgSpriteIcon';
import { RoundMemberData } from '@/libs/mockedData';

interface InfoCardProps {
  person: RoundMemberData | undefined;

  onClose: () => void;
}

export const InfoCard = ({ person, onClose }: InfoCardProps) => {
  const theme = useTheme();

  if (!person) {
    return;
  }

  const color =
    person.group === 1
      ? theme.palette.primary.main
      : theme.palette.secondary.main;

  const { data, name, years } = person;
  return (
    <Box
      sx={{
        position: 'absolute',
        width: { xs: '90%', md: '60%', lg: '40%' },
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        aspectRatio: 1,
        height: 'auto',
        borderRadius: { xs: '10%', md: '50%' },
        backgroundColor: color,
        padding: '5%',
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        color: (theme) => theme.palette.common.white,
      }}
    >
      <IconButton
        sx={{
          position: 'absolute',
          color: color,
          top: { xs: '-7%', md: 0 },
          right: { xs: 0, md: '5%' },
          cursor: 'pointer',
        }}
        aria-label="close button"
        onClick={onClose}
      >
        <SvgSpriteIcon icon="close" size="large" />
      </IconButton>
      <Box>
        <Typography
          sx={{
            textAlign: 'center',
          }}
          variant="h3"
        >
          {name}
        </Typography>
        <Typography
          sx={{
            marginBottom: { xs: 3, md: 5, lg: 6 },
            textAlign: 'center',
          }}
          variant={'h3'}
          component={'p'}
        >
          {years}
        </Typography>
        <Typography
          variant="bodyMedium"
          sx={{ textAlign: 'center' }}
          component="p"
        >
          {data}
        </Typography>
      </Box>
    </Box>
  );
};
