import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { MainStack } from './styled'

import AboutSection from './parts/AboutSection'
import SponsorsSection from './parts/SponsorsSection'
import WFIMCSection from './parts/WFIMCSection'

import WFIMC_members from '@/assets/images/kyiv-geneva/wfimc/wfimc.webp'
import pageData from '@/assets/kyiv-geneva/main/geneva_mainPage.json'
import PageTemplate from '../Common/PageTemplate'
import NavList from '../Templates/NavList/NavList'
import NavListWrapper from '../Templates/NavList/NavListWrapper'

import { kyivGenevaNavigation } from '@/config/routes/navigation'

const KyivGenevaPage = () => {
  const {
    i18n: { language },
  } = useTranslation()

  if (!(language === 'ua' || language === 'en')) {
    return <Box />
  }

  return (
    <PageTemplate>
      <MainStack>
        <AboutSection content={pageData[language]} />
        <NavListWrapper flexHeightLimits={{ md: '396px', lg: '277px' }}>
          <NavList linksList={kyivGenevaNavigation} />
        </NavListWrapper>
        <WFIMCSection image={WFIMC_members} wfimc_content={pageData[language].wfimc} />
        <SponsorsSection />
      </MainStack>
    </PageTemplate>
  )
}

export default KyivGenevaPage
