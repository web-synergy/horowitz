import { FC } from 'react';
import { Container, Typography } from '@mui/material';
import { TextBlockType } from '@/types/commonTypes';
import PageTemplate from '@/components/Common/PageTemplate';
import GoBackBtn from '@/components/Common/GoBackBtn';
import ArtistCard from './parts/ArtistCard';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';

interface GroupArtistsProps {
  title: string;
  data: TextBlockType[] | null;
  goBackLink: string;
}

const GroupArtists: FC<GroupArtistsProps> = ({ data, goBackLink, title }) => {
  if (!data) return;

  return (
    <>
      <PageTemplate>
        <Container>
          <CommonStackWrapper>
            <Typography variant="h1">{title}</Typography>
            {data &&
              data.map((artist) => (
                <ArtistCard key={artist.title} {...artist} />
              ))}
          </CommonStackWrapper>
        </Container>
      </PageTemplate>
      <GoBackBtn href={goBackLink} />
    </>
  );
};

export default GroupArtists;
