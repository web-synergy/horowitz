import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import React from 'react';
import { Buttons } from '@/types/translation.d';

interface DownloadPdfButtonProps {
  pdfUrl: string;
}

const DownloadPdfButton: React.FC<DownloadPdfButtonProps> = ({ pdfUrl }) => {
  const { t } = useTranslation();
  const handleDownload = async () => {
    try {
      const response = await fetch(pdfUrl);
      const pdfBlob = await response.blob();

      const url = window.URL.createObjectURL(pdfBlob);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Booklet');

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  const btnTitle = t(`buttons.${Buttons.DOWNLOAD}`);

  return (
    <Button
      variant="primary"
      onClick={handleDownload}
      endIcon={<SvgSpriteIcon icon="download" />}
      sx={{
        mb: { xs: 3, md: 5, lg: 6 },
        width: '100%',
        minWidth: { md: 336 },
        maxWidth: 336,
      }}
    >
      {btnTitle}
    </Button>
  );
};

export default DownloadPdfButton;
