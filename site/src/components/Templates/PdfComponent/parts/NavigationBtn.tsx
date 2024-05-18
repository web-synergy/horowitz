import { FC, ChangeEvent, useState, useEffect, FormEvent, useRef } from 'react';

import { Typography, Stack, useTheme, useMediaQuery, Box } from '@mui/material';

import { useTranslation } from 'react-i18next';
import DownloadPdfButton from './DownloadPdfButton';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import {
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
  const pageRef = useRef<HTMLInputElement | null>(null);
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
    if (pageRef) {
      pageRef.current?.blur();
    }
  };

  const onTouchEnd = () => {
    onSaveNewPage(pageInput);
  };

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

          <Box component={'form'} onSubmit={onSubmit}>
            <StyledTextField
              value={pageInput}
              onChange={onChangeInput}
              autoComplete={'off'}
              onBlur={onTouchEnd}
              ref={pageRef}
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
        </Stack>
      </ButtonWrapper>
    </StickyBox>
  );
};

export default NavigationBtn;
