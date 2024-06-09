import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ParticipantType } from '@/types/groupTypes';
import Image from '@/components/Common/Image';

import { urlFor } from '@/config/sanity/imageUrl';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import GrowView from '@/components/Common/GrowView';
import { defineYearsText } from '@/utils/defineYearText';
import TextBlockComponent from '@/components/Templates/TextBlockComponent/TextBlockComponent';

const StudentJuryCard: FC<ParticipantType> = ({
  age,
  avatar,
  country,
  name,
  biography,
}) => {
  const { containerRef, containerSize } = useWidthBlokSize();
  const { t } = useTranslation();

  const imageUrl = urlFor(avatar)
    .auto('format')
    .width(containerSize)
    .height(containerSize)
    .url()
    .toString();

  const yearsText = defineYearsText(age);

  return (
    <GrowView>
      <Box
        sx={{
          maxWidth: { xs: 400, md: '100%', lg: 834 },
          mx: { xs: 'auto', md: 'unset' },
        }}
      >
        <Box
          ref={containerRef}
          sx={{
            float: { xs: 'unset', md: 'left' },
            width: { xs: '100%', md: 243, lg: 262 },

            height: { xs: 'unset', md: 243, lg: 262 },
            mr: { xs: 0, md: 2 },
            mb: { xs: 2, md: 0 },
          }}
        >
          <Image
            src={imageUrl}
            alt={name}
            isLazyLoading={true}
            height={containerSize}
            width={containerSize}
          />
        </Box>
        <Box>
          <Typography variant="subhead" component={'p'}>
            {name}
          </Typography>
          {country && (
            <Typography variant="subhead" component={'p'}>
              {country}
            </Typography>
          )}

          <Typography variant="subhead" component={'p'} mb={{ xs: 2, lg: 3 }}>
            {age} {t(`age.${yearsText}`)}
          </Typography>
          <TextBlockComponent text={biography} column={1} inline />
        </Box>
      </Box>
    </GrowView>
  );
};

export default StudentJuryCard;
