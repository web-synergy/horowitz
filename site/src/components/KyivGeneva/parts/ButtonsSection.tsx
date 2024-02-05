import { kyivGenevaNavigation } from '@/config/routes/navigation'
import { Routes } from '@/types/routes.d'
import { Box, Button, Container, Stack } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

type ButtonsSectionProps = {
  bgImage: string
}

const ButtonsSection: FC<ButtonsSectionProps> = ({ bgImage }) => {
  const { t } = useTranslation()

  return (
    <Box
      position={'relative'}
      sx={{
        '::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        },
      }}
    >
      <Box
        component={'img'}
        src={bgImage}
        alt="background image"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Box position={'relative'} zIndex={5}>
        <Container>
          <Stack
            sx={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              columnGap: '56px',
              rowGap: {
                xs: '24px',
                lg: '48px',
              },
              margin: {
                xs: '48px 0',
                md: '115px 0 105px',
                lg: '160px 0',
              },
              justifyContent: {
                xs: 'center',
                md: 'space-between',
              },
            }}
          >
            {kyivGenevaNavigation.map(navigation => (
              <Button
                fullWidth
                component={Link}
                sx={{
                  '&.MuiButton-root': {
                    padding: '14px',
                    fontSize: {
                      xs: '16px',
                      lg: '18px',
                    },
                  },
                  width: 'calc(33.3333% - 38px)',
                  minWidth: '288px',
                }}
                to={`/${Routes.KYIV_GENEVA}/${navigation.title}`}
              >
                {t(`kyivGeneva.${navigation.title}`)}
              </Button>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default ButtonsSection
