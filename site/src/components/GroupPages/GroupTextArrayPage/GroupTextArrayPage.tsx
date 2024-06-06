import { FC } from 'react';
import { Container, Typography } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import InfoBlock from '@/components/Templates/InfoBlock.tsx/InfoBlock';
import GoBackBtn from '@/components/Common/GoBackBtn';
import { TextBlockType } from '@/types/commonTypes';

interface GroupTextArrayPageProps {
  title: string;
  data: TextBlockType[] | null;
  goBackLink: string;
}

const GroupTextArrayPage: FC<GroupTextArrayPageProps> = ({
  title,
  data,
  goBackLink,
}) => {
  console.log(data);
  return (
    <>
      <PageTemplate>
        <Container>
          <Typography variant="h1" mb={{ xs: 3, md: 5, lg: 6 }}>
            {title}
          </Typography>
          <CommonStackWrapper>
            {data &&
              data.map((item) => (
                <InfoBlock
                  title={item.title}
                  text={item.text}
                  image={item.image}
                  key={item.title}
                />
              ))}
          </CommonStackWrapper>
        </Container>
      </PageTemplate>
      <GoBackBtn href={goBackLink} />
    </>
  );
};

export default GroupTextArrayPage;
