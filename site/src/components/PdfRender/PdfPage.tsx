import { useParams } from 'react-router-dom';
import PDFReader from './MyDocument';
import { Box } from '@mui/material';
import GoBackBtn from '../Common/GoBackBtn';
import { Routes } from '@/types/routes.d';
import { useFetch } from '@/hook/useFetch';
import { getPDFQuery } from '@/api/query';
import { IFileResponse } from '@/types/pdfTypes';
import Loader from '../Common/Loader';
import { useTranslation } from 'react-i18next';

export default function PdfPage() {
  const { name } = useParams();
  const {
    i18n: { language },
  } = useTranslation();

  const { responseData, loading } = useFetch<IFileResponse>(getPDFQuery, {
    name,
    language,
  });
  if (loading) return <Loader />;
  if (!responseData) return;

  return (
    <>
      <Box sx={{ display: 'grid', justifyItems: 'center' }}>
        <Box>
          <PDFReader {...responseData} />
        </Box>
      </Box>
      <GoBackBtn href={Routes.HOME} />
    </>
  );
}
