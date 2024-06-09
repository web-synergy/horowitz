import { FC } from 'react';
import { Container, Typography } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import GridTemplate from '@/components/Templates/GridTemplate';
import WinnerItem from './parts/WinnerItem';
import { WinnerType, ParticipantType } from '@/types/groupTypes';
import { IPortableImgGallery } from '@/types/newsTypes';
import { ImagesArray } from '@/components/Templates/PortableComponent/parts/ImageComponent';

type WinnerItemType = WinnerType & {
  participantData: ParticipantType;
};

interface GroupWinnerProps {
  title: string;
  goBackLink: string;
  winners: WinnerItemType[];
  winnerGallery: IPortableImgGallery | null;
}

const GroupWinners: FC<GroupWinnerProps> = ({
  goBackLink,
  title,
  winnerGallery,
  winners,
}) => {
  return (
    <PageTemplate goBackUrl={goBackLink}>
      <Container>
        <CommonStackWrapper>
          <Typography variant="h1">{title}</Typography>
          <GridTemplate list={winners} gridItem={WinnerItem} />
          {winnerGallery && <ImagesArray value={winnerGallery} />}
        </CommonStackWrapper>
      </Container>
    </PageTemplate>
  );
};

export default GroupWinners;
