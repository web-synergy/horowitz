import { Box, Typography, useTheme, IconButton, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
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

  const bgColor =
    person.group === 1
      ? theme.palette.primary.main
      : theme.palette.secondary.main;

  const oppositeColor =
    person.group === 1
      ? theme.palette.secondary.main
      : theme.palette.primary.main;

  const { data, name, years, link, place } = person;
  return (
    <Box
      sx={{
        position: 'absolute',
        width: { xs: '90%', md: '60%', lg: '50%' },
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        aspectRatio: 1,
        height: 'auto',
        borderRadius: { xs: '10%', md: '30%', lg: '50%' },
        backgroundImage:
          person.group === 0
            ? 'linear-gradient(-35deg, rgba(11,45,163,1) 0%, rgba(217,161,69,1) 100%)'
            : 'none',
        backgroundColor: bgColor,
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
          color: bgColor,
          top: { xs: '-50px', md: 0 },
          right: { xs: 0, md: '5%' },
          cursor: 'pointer',
          '&:hover': {
            color: oppositeColor,
          },
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
            textAlign: 'center',
          }}
          variant={'h3'}
          component={'p'}
        >
          {years}
        </Typography>
        <Typography
          sx={{
            marginBottom: { xs: 3, md: 5, lg: 6 },
            textAlign: 'center',
          }}
          variant={'h6'}
          component={'p'}
        >
          {place}
        </Typography>
        <Typography
          variant="bodyMedium"
          sx={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}
          component="p"
        >
          {data}
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Link
            component={RouterLink}
            to={link}
            sx={{
              cursor: 'pointer',
              position: 'relative',
              color: oppositeColor,

              '&:hover, &:focus-visible': {
                color: oppositeColor,
                backgroundColor: 'transparent',
                position: 'relative',

                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '1px',
                  width: '100%',
                  backgroundColor: oppositeColor,
                },
              },

              '&:active': {
                backgroundColor: 'transparent',
              },
            }}
            target="_blank"
          >
            Більше інформації по посиланню
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
