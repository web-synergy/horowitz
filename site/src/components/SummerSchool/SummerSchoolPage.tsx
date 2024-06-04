import { useSummerSchoolStore } from '@/store/summerSchoolStore';
import { SummerSchool } from '@/types/translation.d';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Container, Typography } from '@mui/material';
import ImageComponent from '../Templates/ImageComponent/ImageComponent';
import Loader from '../Common/Loader';
import PageTemplate from '../Common/PageTemplate';
import CommonStackWrapper from '../Common/CommonStackWrapper';
import ButtonsArea from './parts/ButtonsArea';
import { RegularText } from '../Common/RegularText';
import { StyledBox } from './parts/styled';

import { ImagesArray } from '../Templates/PortableComponent/parts/ImageComponent';

const SummerSchoolPage: FC = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const {
    topText,
    bottomText,
    fetchData,
    infographicImg,
    gallery,
    requestLang,
    isLoading,
    annualSummerSchool,
  } = useSummerSchoolStore((state) => ({
    topText: state.topText,
    fetchData: state.fetchSchoolData,
    infographicImg: state.infographic,
    bottomText: state.bottomText,
    gallery: state.gallery,
    requestLang: state.requestLang,
    isLoading: state.isLoading,
    annualSummerSchool: state.annualSummerSchool,
  }));

  useEffect(() => {
    if (requestLang === language) return;
    fetchData(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  if (isLoading) return <Loader />;
  if (!requestLang.length) return null;

  return (
    <PageTemplate>
      <Container>
        <CommonStackWrapper>
          <Typography component={'h1'} variant="h1" textAlign={'center'}>
            {t(`summerSchool.${SummerSchool.TITLE}`)}
          </Typography>
          <RegularText text={topText} />
          {infographicImg && <ImageComponent image={infographicImg} />}
          <RegularText text={bottomText} />

          <StyledBox>
            <ButtonsArea btnsList={annualSummerSchool} />
          </StyledBox>

          {gallery && <ImagesArray value={gallery} />}
        </CommonStackWrapper>
      </Container>
    </PageTemplate>
  );
};

export default SummerSchoolPage;
