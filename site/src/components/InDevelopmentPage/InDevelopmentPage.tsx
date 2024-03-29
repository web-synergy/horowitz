import { InDevelopment, Buttons } from '@/types/translation.d';
import { useTranslation } from 'react-i18next';

import { Button } from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PageTemplate from '../Common/PageTemplate';
import { StyledBox, StyledContainer, StyledTypography } from './styled';

const InDevelopmentPage: FC = () => {
  const { t } = useTranslation();

  return (
    <PageTemplate mode="dark" padding={false}>
      <StyledContainer>
        <StyledBox>
          <StyledTypography variant="subhead" component={'p'}>
            {t(`inDevelopment.${InDevelopment.MSG}`)}
          </StyledTypography>
          <Button component={RouterLink} to={'/'} sx={{ width: '250px' }}>
            {t(`buttons.${Buttons.GO_HOME}`)}
          </Button>
        </StyledBox>
      </StyledContainer>
    </PageTemplate>
  );
};

export default InDevelopmentPage;
