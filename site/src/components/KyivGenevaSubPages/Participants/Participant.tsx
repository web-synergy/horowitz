import { FC } from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IParticipants } from '@/types/kyivGenevaDataTypes';
import ImagePerson from '../Common/ImagePerson';

interface ParticipantProps {
  item: IParticipants;
}

const Participant: FC<ParticipantProps> = ({ item }) => {
  const {
    i18n: { language },
  } = useTranslation();
  return (
    <>
      <ImagePerson img={item.img} />
      <Typography
        variant="subhead"
        component={'p'}
        sx={{
          margin: '24px 0px 16px',
        }}
      >
        {language === 'ua' ? item.fullName.ua : item.fullName.en}
      </Typography>
    </>
  );
};

export default Participant;
