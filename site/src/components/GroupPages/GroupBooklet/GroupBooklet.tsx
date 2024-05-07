import { FC } from 'react';

import { Container } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import PDFReader from '@/components/Templates/PdfComponent/PDFReader';

interface GroupBookletProps {
  goBackLink: string;
  bookletUrl: string;
}

const GroupBooklet: FC<GroupBookletProps> = ({ bookletUrl, goBackLink }) => {
  return (
    <PageTemplate goBackUrl={goBackLink}>
      <Container>
        <PDFReader URL={bookletUrl} />
      </Container>
    </PageTemplate>
  );
};

export default GroupBooklet;
