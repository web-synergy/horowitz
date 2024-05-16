import { FC } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { StyledButton } from './styled';
import { Buttons } from '@/types/translation.d';

interface DownloadPdfButtonProps {
  pdfUrl: string;
}

const DownloadPdfButton: FC<DownloadPdfButtonProps> = ({ pdfUrl }) => {
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

  return (
    <StyledButton
      aria-label={t(`buttons.${Buttons.DOWNLOAD}`)}
      onClick={handleDownload}
      endIcon={<SvgSpriteIcon icon="download" />}
    >
      {isNotMobile && t(`buttons.${Buttons.DOWNLOAD}`)}
    </StyledButton>

    // <StyledIconButton aria-label="download-pdf" onClick={handleDownload}>
    //   Download <SvgSpriteIcon icon="download" />
    // </StyledIconButton>
  );
};

export default DownloadPdfButton;
