import { useTranslation } from 'react-i18next';
import { MainStack } from './styled';

import AboutSection from './parts/AboutSection';
import ButtonsSection from './parts/ButtonsSection';
import SponsorsSection from './parts/SponsorsSection';
import WFIMCSection from './parts/WFIMCSection';

import pianoImg from '@/assets/images/kyiv-geneva/mainPage/geneva_bg_piano.webp';
import WFIMC_members from '@/assets/images/kyiv-geneva/wfimc/wfimc.webp';
import pageData from '@/assets/kyiv-geneva/main/geneva_mainPage.json';
import PageTemplate from '../Common/PageTemplate';

const KyivGenevaPage = () => {
  const {
    i18n: { language },
  } = useTranslation();

  if (language === 'ua' || language === 'en')
    return (
      <PageTemplate>
        <MainStack>
          <AboutSection content={pageData[language]} />
          <ButtonsSection bgImage={pianoImg} />
          <WFIMCSection
            image={WFIMC_members}
            wfimc_content={pageData[language].wfimc}
          />
          <SponsorsSection />
        </MainStack>
      </PageTemplate>
    );
};

export default KyivGenevaPage;
