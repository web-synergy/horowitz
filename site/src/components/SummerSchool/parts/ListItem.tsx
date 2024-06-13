import { MainAnnualSummerSchoolTypes } from '@/types/annualSummerSchoolTypes';
import { Buttons, SummerSchool } from '@/types/translation.d';
import { Box, Button, Link } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';

interface ListItemProps extends MainAnnualSummerSchoolTypes {
  bgImage: string;
}
const ListItem: FC<ListItemProps> = ({
  bgImage,
  isActive,
  slug,
  applicationLink,
  year,
}) => {
  const { t } = useTranslation();

  const musicAcademyTitle =
    t(`summerSchool.${SummerSchool.ACADEMY}`) + ' - ' + year;

  return (
    <Box
      sx={{
        position: 'relative',
        width: {
          xs: 288,
          md: 332,
          lg: 340,
        },

        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <CommonStackWrapper
        sx={{
          py: { xs: 5, lg: 6 },
          px: { xs: 2, md: '30px', lg: 3 },
        }}
      >
        <Button variant="navigation" component={RouterLink} to={slug}>
          {musicAcademyTitle}
        </Button>
        <Button
          variant="application"
          component={Link}
          disabled={!isActive}
          href={applicationLink ? applicationLink : ''}
          target={'_blank'}
        >
          {t(`buttons.${Buttons.APPLY}`)}
        </Button>
      </CommonStackWrapper>
    </Box>
  );
};

export default ListItem;
