import { useFetch } from '@/hook/useFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PDFReader from './MyDocument';
import { getPDF } from '@/api';
import { Box } from '@mui/material';
import GoBackBtn from '../Common/GoBackBtn';
import { Routes } from '@/types/routes.d';

export default function PdfPage() {
  const { name } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    if (name) getPDF(name).then(res => setData(res[0].URL));
  }, []);
  if (!data) return;
  return (
    <>
      <Box sx={{ display: 'grid', justifyItems: 'center' }}>
        <Box>
          <PDFReader file={data} />
        </Box>
      </Box>
      <GoBackBtn href={Routes.HOME} />
    </>
  );
}
