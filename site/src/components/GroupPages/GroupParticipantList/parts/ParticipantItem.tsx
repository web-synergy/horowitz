import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack, Typography } from '@mui/material';
import PersonPhoto from '@/components/Templates/PersonPhoto/PersonPhoto';
import ReadMoreBtn from '@/components/Common/LinkBtn';

import { defineYearsText } from '@/utils/defineYearText';
import { ParticipantType } from '@/types/groupTypes';

interface ParticipantItemProps {
  item: ParticipantType;
}

const ParticipantItem: FC<ParticipantItemProps> = ({ item }) => {
  const { age, avatar, name, slug } = item;
  const { t } = useTranslation();
  const ageText = defineYearsText(age);

  return (
    <Stack gap={2}>
      <Stack gap={3}>
        <PersonPhoto alt={name} image={avatar} />
        <Typography variant="subhead">{name}</Typography>
        <Typography>{`${age} ${t(`age.${ageText}`)}`}</Typography>
      </Stack>
      <ReadMoreBtn href={slug} />
    </Stack>
  );
};

export default ParticipantItem;
