import { FC } from 'react';
import { Typography } from '@mui/material';
import { TextBlockType } from '@/types/commonTypes';
import TextBlockComponent from '../TextBlockComponent/TextBlockComponent';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';

const InfoBlock: FC<TextBlockType> = ({ title, text, image }) => {
  return (
    <CommonStackWrapper>
      <Typography variant={'h3'}>{title}</Typography>
      <TextBlockComponent textArray={text} img={image} />
    </CommonStackWrapper>
  );
};

export default InfoBlock;
