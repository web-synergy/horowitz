import { MainAnnualSummerSchoolTypes } from '@/types/annualSummerSchoolTypes'
import { Buttons, SummerSchool } from '@/types/translation.d'
import { Box, Button, Stack } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom'

interface ListItemProps extends MainAnnualSummerSchoolTypes {
  bgImage: string
}
const ListItem: FC<ListItemProps> = ({ bgImage, isActive, slug, applicationLink, year }) => {
  const { t } = useTranslation()

  const musicAcademyTitle = t(`summerSchool.${SummerSchool.ACADEMY}`) + ' - ' + year

  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: {
          xs: '288px',
          md: '332px',
          lg: '357px',
        },
        padding: {
          xs: '40px 16px',
          md: '40px 30px',
          lg: '46px 24px',
        },
        img: {
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        },
      }}
    >
      <img src={bgImage} alt="background image" />
      <Stack spacing={{ xs: 3, md: 5, lg: 6 }}>
        <Button
          variant="transparent"
          component={RouterLink}
          to={slug.current}
          sx={{
            borderColor: theme => theme.palette.neutral[70],
            '&:hover': {
              color: 'inherit',
              bgcolor: 'transparent',
              borderColor: theme => theme.palette.neutral[70],
            },
          }}
        >
          {musicAcademyTitle}
        </Button>
        <Button
          variant="transparent"
          component={RouterLink}
          disabled={!isActive}
          to={applicationLink ? applicationLink : ''}
          sx={{
            borderColor: theme => theme.palette.neutral[70],
            backgroundColor: theme => theme.palette.common.white,
            '&.Mui-disabled': {
              color: theme => theme.palette.neutral[50],
              bgcolor: theme => theme.palette.neutral[20],
            },
          }}
        >
          {t(`buttons.${Buttons.APPLY}`)}
        </Button>
      </Stack>
    </Box>
  )
}

export default ListItem
