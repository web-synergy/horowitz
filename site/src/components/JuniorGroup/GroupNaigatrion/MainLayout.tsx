import { FC, useEffect, useState, ElementType } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Typography, Fade, Box } from '@mui/material';
// import { useTranslation } from 'react-i18next';
import { useCompetitionStore } from '@/store/competitionStore';
import PageTemplate from '@/components/Common/PageTemplate';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import GroupNavigation from './parts/GroupTabs';
import GoBackBtn from '@/components/Common/GoBackBtn';
import TabPannel from './parts/TabPannel';
import SubGroupTabs from './parts/SubGroupTabs';
import { ETabs, EDebut } from '@/types/translation.d';
import { Routes } from '@/types/routes.d';

const debutArray = Object.values(EDebut);

type StateType = ETabs | EDebut;

const stateArray = [ETabs.JUNIOR, ...debutArray];
const GROUP_PARAM = 'group';

interface MainLayoutProps {
  title: string;
  juniorGroup: ElementType;
  subGroup: ElementType;
}

const MainLayout: FC<MainLayoutProps> = ({
  title,
  juniorGroup: JuniorGroup,
  subGroup: SubGroup,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const groupName = searchParams.get(GROUP_PARAM);

  const [tabValue, setTabValue] = useState<StateType>(() => {
    if (!groupName) {
      return EDebut.GROUP_A;
    }
    const result = stateArray.find((item) => item === groupName);
    if (!result) {
      return EDebut.GROUP_A;
    }

    if (result === ETabs.DEBUT) {
      return EDebut.GROUP_A;
    }
    return result;
  });

  useEffect(() => {
    if (tabValue && tabValue !== groupName) {
      setSearchParams({ [GROUP_PARAM]: tabValue });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabValue]);

  const onChangeTab = (newValue: StateType) => {
    if (newValue === ETabs.DEBUT) {
      setTabValue(EDebut.GROUP_A);
      return;
    }
    setTabValue(newValue);
  };

  const { slug } = useCompetitionStore();
  const goBackLink = `/${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`;

  const groupTab = tabValue === ETabs.JUNIOR ? ETabs.JUNIOR : ETabs.DEBUT;

  return (
    <>
      <PageTemplate>
        <Container>
          <CommonStackWrapper>
            <Typography variant="h1">{title}</Typography>
            <GroupNavigation
              onChangeTab={onChangeTab}
              tabName={title.toLowerCase()}
              tabValue={groupTab}
            />
            <TabPannel
              activeValue={groupTab}
              value={ETabs.DEBUT}
              name={groupTab}
            >
              {tabValue !== ETabs.JUNIOR && tabValue !== ETabs.DEBUT && (
                <Fade in={groupTab === ETabs.DEBUT} timeout={1000}>
                  <Box>
                    <CommonStackWrapper>
                      <SubGroupTabs
                        tabValue={tabValue}
                        onChangeSubGroup={onChangeTab}
                        tabName={title.toLowerCase()}
                      />

                      <TabPannel
                        activeValue={tabValue}
                        value={EDebut.GROUP_A}
                        name={EDebut.GROUP_A}
                      >
                        <SubGroup title={EDebut.GROUP_A} />
                      </TabPannel>
                      <TabPannel
                        activeValue={tabValue}
                        value={EDebut.GROUP_B}
                        name={EDebut.GROUP_B}
                      >
                        <SubGroup title={EDebut.GROUP_B} />
                      </TabPannel>
                      <TabPannel
                        activeValue={tabValue}
                        value={EDebut.GROUP_C}
                        name={EDebut.GROUP_C}
                      >
                        <SubGroup title={EDebut.GROUP_C} />
                      </TabPannel>
                      <TabPannel
                        activeValue={tabValue}
                        value={EDebut.GROUP_D}
                        name={EDebut.GROUP_D}
                      >
                        <SubGroup title={EDebut.GROUP_D} />
                      </TabPannel>
                    </CommonStackWrapper>
                  </Box>
                </Fade>
              )}
            </TabPannel>

            <TabPannel
              activeValue={groupTab}
              value={ETabs.JUNIOR}
              name={groupTab}
            >
              <Fade in={groupTab === ETabs.JUNIOR} timeout={1000}>
                <Box>
                  <JuniorGroup title={ETabs.JUNIOR} />
                </Box>
              </Fade>
            </TabPannel>
          </CommonStackWrapper>
        </Container>
      </PageTemplate>
      <GoBackBtn href={goBackLink} importantHref={true} />
    </>
  );
};

export default MainLayout;
