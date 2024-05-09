import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { useTranslation } from 'react-i18next';
import { useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import { Buttons } from '@/types/translation.d';
import { StyledButton } from './styled';

interface DownloadPdfButtonProps {
  pdfUrl: string;
}

const DownloadPdfButton: React.FC<DownloadPdfButtonProps> = ({ pdfUrl }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));

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
    <StyledButton
      aria-label="download-pdf"
      variant="primary"
      onClick={handleDownload}
      endIcon={<SvgSpriteIcon icon="download" />}
    >
      {isNotMobile && btnTitle}
    </StyledButton>
  );
};

export default DownloadPdfButton;
