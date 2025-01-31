import { fileUrl } from '@/config/sanity/fileUrl';
import PDFReader from '../../PdfComponent/PDFReader';

export default function PdfFile({
  value,
}: {
  value: { asset: { _ref: string } };
}) {
  const url = fileUrl(value.asset._ref);
  console.log(url);

  return <PDFReader URL={url} />;
}
