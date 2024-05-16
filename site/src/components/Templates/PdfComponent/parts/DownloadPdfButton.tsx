import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import React from 'react';
import { StyledIconButton } from './styled';

interface DownloadPdfButtonProps {
  pdfUrl: string;
}

const DownloadPdfButton: React.FC<DownloadPdfButtonProps> = ({ pdfUrl }) => {
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

  return (
    <StyledIconButton aria-label="download-pdf" onClick={handleDownload}>
      <SvgSpriteIcon icon="download" />
    </StyledIconButton>
  );
};

export default DownloadPdfButton;
