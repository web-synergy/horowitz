import { FC } from 'react';
import { Box, Button } from '@mui/material';
import { To, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Buttons } from '@/types/translation.d';
import SvgSpriteIcon from './SvgSpriteIcon';

interface GoBackBtnProps {
  href: string;
}

const GoBackBtn: FC<GoBackBtnProps> = ({ href }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onClickButton = () => {
    const historyStack = window.history.state.idx;
    const goBackHref = historyStack !== 0 ? (-1 as To) : `/${href}`;
    const goBackOptions = historyStack !== 0 ? {} : { replace: true };
    navigate(goBackHref, goBackOptions);
  };

  return (
    <Box sx={{ position: 'sticky', bottom: 0, zIndex: 1000 }}>
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 15, lg: 20 },
          left: { xs: 10, lg: 20 },
        }}
      >
        <Button
          variant="goBack"
          role="link"
          aria-label="go back"
          onClick={onClickButton}
          startIcon={
            <SvgSpriteIcon icon="arrow" sx={{ transform: 'rotate(90deg)' }} />
          }
        >
          {t(`buttons.${Buttons.GO_BACK}`)}
        </Button>
      </Box>
    </Box>
  );
};

export default GoBackBtn;
