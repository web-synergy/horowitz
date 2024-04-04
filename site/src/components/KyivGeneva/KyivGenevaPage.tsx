import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

import WFIMC_members from '@/assets/images/kyiv-geneva/wfimc/wfimc.webp'
import pageData from '@/assets/kyiv-geneva/main/geneva_mainPage.json'
import { kyivGenevaNavigation } from '@/config/routes/navigation'
import PageTemplate from '../Common/PageTemplate'
import { CommonStackWrapper } from '../Common/styledComponents'
import ButtonsSection from '../Templates/ButtonsSection'
import AboutSection from './parts/AboutSection'
import SponsorsSection from './parts/SponsorsSection'
import WFIMCSection from './parts/WFIMCSection'

const KyivGenevaPage = () => {
  const {
    i18n: { language },
  } = useTranslation()

  if (!(language === 'ua' || language === 'en')) {
    return <Box />
  }

  return (
    <PageTemplate>
      <CommonStackWrapper>
        <AboutSection content={pageData[language]} />
        <ButtonsSection
          linksList={kyivGenevaNavigation}
          sx={{
            margin: {
              xs: '48px 0',
              md: '96px 0',
              lg: '120px 0',
            },
            height: {
              md: '396px',
              lg: '277px',
            },
          }}
        />
        <WFIMCSection image={WFIMC_members} wfimc_content={pageData[language].wfimc} />
        <SponsorsSection />
      </CommonStackWrapper>
    </PageTemplate>
  )
}

export default KyivGenevaPage
