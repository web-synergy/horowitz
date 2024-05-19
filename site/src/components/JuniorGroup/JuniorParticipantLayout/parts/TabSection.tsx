import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useCompetitionStore } from '@/store/competitionStore';
import { Routes } from '@/types/routes.d';
import { Tabs } from '@/types/translation.d';
import { GroupTab, GroupTabs } from './styled';

const tabsArray = Object.values(Tabs);

const TabSection = () => {
  const { t } = useTranslation();
  const { slug } = useCompetitionStore();
  const { pathname } = useLocation();

  const [tabValue, setTabValue] = useState<Tabs>(() => {
    const group = pathname.split('/').slice(-1)[0];
    return group === Tabs.JUNIOR ? Tabs.JUNIOR : Tabs.DEBUT;
  });
  const navigate = useNavigate();

  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));

  const debutPath = `/${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}/${Routes.GROUP_PARTICIPANTS}`;
  const juniorPath = `/${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}/${Routes.GROUP_PARTICIPANTS}/${Tabs.JUNIOR}`;

  const onChangeTab = (_: React.SyntheticEvent, newValue: Tabs) => {
    setTabValue(newValue);
    if (newValue === Tabs.DEBUT) {
      navigate(debutPath);
    }
    if (newValue === Tabs.JUNIOR) {
      navigate(juniorPath);
    }
  };
  return (
    <GroupTabs
      value={tabValue}
      onChange={onChangeTab}
      aria-label="tab-panel-for-participants"
      variant="fullWidth"
      orientation={isNotMobile ? 'horizontal' : 'vertical'}
    >
      {tabsArray.map((tab) => (
        <GroupTab
          value={tab}
          label={t(`buttons.${tab}`)}
          key={tab}
          aria-controls={`tab-for-${tab}`}
          disableRipple
          disableTouchRipple
          disableFocusRipple
          data-value={tab}
        />
      ))}
    </GroupTabs>
  );
};

export default TabSection;
