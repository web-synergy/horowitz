import { fileUrl } from '@/config/sanity/fileUrl';
import PDFReader from '../../PdfComponent/PDFReader';
import { Box} from '@mui/material'


export default function PdfFile({
  value,
}: {
  value: { asset: { _ref: string } };
}) {
  const url = fileUrl(value.asset._ref);

  return <PDFReader URL={url} />
}
