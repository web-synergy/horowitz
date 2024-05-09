import { FC, MutableRefObject } from 'react';
import { Stack, Box, useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DownloadPdfButton from './DownloadPdfButton';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { StyledButton } from './styled';
import { Buttons } from '@/types/translation.d';

interface NavigationBtnProps {
  prevRef: MutableRefObject<HTMLButtonElement | null>;
  nextRef: MutableRefObject<HTMLButtonElement | null>;
  pdfUrl: string;
}

const NavigationBtn: FC<NavigationBtnProps> = ({
  prevRef,
  nextRef,
  pdfUrl,
}) => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: 'sticky',
        top: { xs: 70, lg: 110 },
        zIndex: 1000,
        height: { xs: 72, md: 100, lg: 108 },
      }}
    >
      <Stack justifyContent={'space-between'} direction={'row'} gap={1}>
        <Box>
          <DownloadPdfButton pdfUrl={pdfUrl} />
        </Box>

        <Stack direction="row" gap={3}>
          <Box>
            <StyledButton
              ref={prevRef}
              startIcon={
                <SvgSpriteIcon
                  icon="arrow"
                  sx={{ transform: 'rotate(90deg)' }}
                />
              }
            >
              {isNotMobile && t(`buttons.${Buttons.PREV}`)}
            </StyledButton>
          </Box>
          <Box>
            <StyledButton
              ref={nextRef}
              endIcon={
                <SvgSpriteIcon
                  icon="arrow"
                  sx={{ transform: 'rotate(-90deg)' }}
                />
              }
            >
              {isNotMobile && t(`buttons.${Buttons.NEXT}`)}
            </StyledButton>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NavigationBtn;
