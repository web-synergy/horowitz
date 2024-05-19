import { FC } from 'react';
import { Typography, Container, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ParticipantType } from '@/types/groupTypes';
import PageTemplate from '@/components/Common/PageTemplate';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import PortableComponent from '@/components/Templates/PortableComponent/PortableComponent';
import Image from '@/components/Common/Image';
import { urlFor } from '@/config/sanity/imageUrl';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { defineYearsText } from '@/utils/defineYearText';

interface GroupParticipantProps {
  participant: ParticipantType;
  goBackLink: string;
}

const ASPECT_RATIO = [
  { title: '3/4', value: 0.75 },
  { title: '1/1', value: 1 },
  { title: '16/9', value: 1.777 },
];

const GroupParticipant: FC<GroupParticipantProps> = ({
  goBackLink,
  participant,
}) => {
  const { containerRef, containerSize } = useWidthBlokSize();
  const { t } = useTranslation();
  const {
    name,
    age,
    biography,
    avatar: { aspectRatio, image },
  } = participant;

  const aspectValue =
    ASPECT_RATIO.find((item) => item.title === aspectRatio)?.value || 1;

  const imageHeight = Math.floor(containerSize / aspectValue);

  const imageUrl = urlFor(image)
    .auto('format')
    .width(containerSize)
    .height(imageHeight)
    .toString();

  const ageText = t(`age.${defineYearsText(age)}`);
  return (
    <PageTemplate goBackUrl={goBackLink}>
      <Container>
        <CommonStackWrapper>
          <Typography variant="h1">{name}</Typography>
          <Box>
            <Box
              ref={containerRef}
              sx={{
                width: { xs: 350, md: 243, lg: 262 },

                float: { xs: 'unset', md: 'left' },
                ml: { xs: 'auto', md: 0 },
                mr: { xs: 'auto', md: 3 },
                mb: { xs: 3, md: 1 },
              }}
            >
              <Image
                src={imageUrl}
                height={imageHeight}
                width={containerSize}
                isLazyLoading={false}
                alt={`photo for ${name}`}
              />
            </Box>

            <Typography component={'p'} mb={2}>
              {age} {ageText}
            </Typography>
            <PortableComponent data={biography} />
          </Box>
        </CommonStackWrapper>
      </Container>
    </PageTemplate>
  );
};

export default GroupParticipant;
