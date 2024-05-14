import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack, Typography } from '@mui/material';
import PersonPhoto from '@/components/Templates/PersonPhoto/PersonPhoto';
import ReadMoreBtn from '@/components/Common/ReadMoreBtn';
import { IImageReference } from '@/types/commonTypes';
import { defineYearsText } from '@/utils/defineYearText';

interface ParticipantItemProps {
  name: string;
  img: IImageReference;
  age: number;
  readMoreLink: string;
}

const ParticipantItem: FC<ParticipantItemProps> = ({
  age,
  img,
  name,
  readMoreLink,
}) => {
  const { t } = useTranslation();
  const ageText = defineYearsText(age);

  return (
    <Stack gap={2}>
      <Stack gap={3}>
        <PersonPhoto alt={name} image={img} />
        <Typography variant="subhead">{name}</Typography>
        <Typography>{`${age} ${t(`age.${ageText}`)}`}</Typography>
      </Stack>
      <ReadMoreBtn href={readMoreLink} />
    </Stack>
  );
};

export default ParticipantItem;
