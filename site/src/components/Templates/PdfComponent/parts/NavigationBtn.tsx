import { FC, ChangeEvent, useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';
import DownloadPdfButton from './DownloadPdfButton';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import {
  StyledIconButton,
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
  const [value] = useDebounce(pageInput, 1000);

  useEffect(() => {
    if (currentPage !== pageInput) {
      setPageInput(currentPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    if (value !== currentPage && value !== '') {
      onChangePage(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const onClickPreviousPage = () => {
    if (currentPage === 1) {
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
    } else if (value > totalPages) {
      setPageInput(totalPages);
    } else if (value < 1) {
      setPageInput(1);
    } else {
      setPageInput(value);
    }
  };

  return (
    <StickyBox>
      <ButtonWrapper>
        <DownloadPdfButton pdfUrl={pdfUrl} />

        <StyledIconButton
          aria-label={t(`buttons.${Buttons.PREV}`)}
          onClick={onClickPreviousPage}
          disabled={currentPage === 1}
        >
          <SvgSpriteIcon icon="arrow" sx={{ transform: 'rotate(90deg)' }} />
        </StyledIconButton>
        <StyledTextField value={pageInput} onChange={onChangeInput} />
        <Typography whiteSpace={'noWrap'}>from {totalPages}</Typography>
        <StyledIconButton
          aria-label={t(`buttons.${Buttons.NEXT}`)}
          onClick={onClickNextPage}
          disabled={currentPage === totalPages}
        >
          <SvgSpriteIcon icon="arrow" sx={{ transform: 'rotate(-90deg)' }} />
        </StyledIconButton>
      </ButtonWrapper>
    </StickyBox>
  );
};

export default NavigationBtn;
