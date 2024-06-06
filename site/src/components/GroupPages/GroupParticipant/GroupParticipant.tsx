import { FC } from 'react';
import { Typography, Container, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ParticipantType } from '@/types/groupTypes';
import PageTemplate from '@/components/Common/PageTemplate';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import TextBlockComponent from '@/components/Templates/TextBlockComponent/TextBlockComponent';
import Image from '@/components/Common/Image';
import { urlFor } from '@/config/sanity/imageUrl';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { defineYearsText } from '@/utils/defineYearText';

interface GroupParticipantProps {
  participant: ParticipantType;
  goBackLink: string;
}

const GroupParticipant: FC<GroupParticipantProps> = ({
  goBackLink,
  participant,
}) => {
  const { containerRef, containerSize } = useWidthBlokSize();
  const { t } = useTranslation();
  const { name, age, biography, avatar } = participant;

  const imageHeight = Math.floor(containerSize / 0.9);

  const imageUrl = urlFor(avatar)
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
                height: imageHeight,
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

            <Typography component={'p'} mb={3}>
              {age} {ageText}
            </Typography>
            <TextBlockComponent text={biography} column={1} inline />
          </Box>
        </CommonStackWrapper>
      </Container>
    </PageTemplate>
  );
};

export default GroupParticipant;
