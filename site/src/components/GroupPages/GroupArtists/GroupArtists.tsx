import { FC } from 'react';
import { Container, Typography } from '@mui/material';
import { ArtistType } from '@/types/groupTypes';
import PageTemplate from '@/components/Common/PageTemplate';
import GoBackBtn from '@/components/Common/GoBackBtn';
import ArtistCard from './parts/ArtistCard';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';

interface GroupArtistsProps {
  title: string;
  data: ArtistType[] | null;
  goBackLink: string;
}

const GroupArtists: FC<GroupArtistsProps> = ({ data, goBackLink, title }) => {
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
