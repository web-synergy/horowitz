import { FC, ChangeEvent, useState, useEffect, FormEvent } from 'react';

import { Typography, Stack, useTheme, useMediaQuery, Box } from '@mui/material';

import { useTranslation } from 'react-i18next';
import DownloadPdfButton from './DownloadPdfButton';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import {
  // StyledIconButton,
  StyledButton,
  ButtonWrapper,
  StickyBox,
  StyledTextField,
} from './styled';
import { Buttons } from '@/types/translation.d';

interface NavigationBtnProps {
  pdfUrl: string;
  currentPage: number;
  totalPages: number;
  onChangePage: (value: number) => void;
  onClickPrev: () => void;
  onClickNext: () => void;
}

const NavigationBtn: FC<NavigationBtnProps> = ({
  pdfUrl,
  currentPage,
  totalPages,
  onChangePage,
  onClickNext,
  onClickPrev,
}) => {
  const { t } = useTranslation();
  const [pageInput, setPageInput] = useState<number | ''>(() => currentPage);

  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    if (currentPage !== pageInput) {
      setPageInput(currentPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const onSaveNewPage = (value: number | '') => {
    if (value === '' || value > totalPages || value < 1) {
      setPageInput(currentPage);
      return;
    }
    onChangePage(value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSaveNewPage(pageInput);
  };

  const onTouchEnd = () => {
    onSaveNewPage(pageInput);
  };

  // useEffect(() => {
  //   if (value !== currentPage && value !== '') {
  //     onChangePage(value);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [value]);

  const onClickPreviousPage = () => {
    if (currentPage === 0) {
      return;
    }
    onClickPrev();
  };

  const onClickNextPage = () => {
    if (currentPage === totalPages) {
      return;
    }
    onClickNext();
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);

    if (e.currentTarget.value === '') {
      setPageInput('');
      return;
    }
    if (isNaN(value)) {
      setPageInput((prev) => prev);
    } else {
      setPageInput(value);
    }
  };

  return (
    <StickyBox>
      <ButtonWrapper>
        <DownloadPdfButton pdfUrl={pdfUrl} />
        <Stack direction="row" gap={1} alignItems="center">
          <StyledButton
            aria-label={t(`buttons.${Buttons.PREV}`)}
            onClick={onClickPreviousPage}
            disabled={currentPage === 1}
            startIcon={
              <SvgSpriteIcon icon="arrow" sx={{ transform: 'rotate(90deg)' }} />
            }
          >
            {isNotMobile && t(`buttons.${Buttons.PREV}`)}
          </StyledButton>
          {/* <StyledIconButton
            aria-label={t(`buttons.${Buttons.PREV}`)}
            onClick={onClickPreviousPage}
            disabled={currentPage === 1}
          >
            <SvgSpriteIcon icon="arrow" sx={{ transform: 'rotate(90deg)' }} />
            
          </StyledIconButton> */}
          <Box component={'form'} onSubmit={onSubmit}>
            <StyledTextField
              value={pageInput}
              onChange={onChangeInput}
              autoComplete={'off'}
              onBlur={onTouchEnd}
            />
          </Box>

          <Typography whiteSpace={'noWrap'}>
            {t(`buttons.${Buttons.FROM}`)} {totalPages}
          </Typography>
          <StyledButton
            aria-label={t(`buttons.${Buttons.NEXT}`)}
            onClick={onClickNextPage}
            disabled={currentPage === totalPages}
            endIcon={
              <SvgSpriteIcon
                icon="arrow"
                sx={{ transform: 'rotate(-90deg)' }}
              />
            }
          >
            {isNotMobile && t(`buttons.${Buttons.NEXT}`)}
          </StyledButton>
          {/* <StyledIconButton
            aria-label={t(`buttons.${Buttons.NEXT}`)}
            onClick={onClickNextPage}
            disabled={currentPage === totalPages}
          >
            {t(`buttons.${Buttons.NEXT}`)}
            <SvgSpriteIcon icon="arrow" sx={{ transform: 'rotate(-90deg)' }} />
          </StyledIconButton> */}
        </Stack>
      </ButtonWrapper>
    </StickyBox>
  );
};

export default NavigationBtn;
