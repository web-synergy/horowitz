import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { Button, Tooltip } from '@mui/material';
import React from 'react';

interface DownloadPdfButtonProps {
  pdfUrl: string;
  title: string;
}

const DownloadPdfButton: React.FC<DownloadPdfButtonProps> = ({
  pdfUrl,
  title,
}) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(pdfUrl);
      const pdfBlob = await response.blob();

      const url = window.URL.createObjectURL(pdfBlob);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', title);

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <Tooltip title='Скачати'>
      <Button variant='tertiary' onClick={handleDownload}>
        <SvgSpriteIcon
          icon='scrollUp'
          sx={{
            transform: 'rotate(180deg)',
            width: { xs: '16px', lg: '20px' },
            height: { xs: '16px', lg: '18px' },
          }}
        />
      </Button>
    </Tooltip>
  );
};

export default DownloadPdfButton;
