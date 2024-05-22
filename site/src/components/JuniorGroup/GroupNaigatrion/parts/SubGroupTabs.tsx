import { SyntheticEvent, FC } from 'react';
import {
  Tabs,
  Tab,
  Divider,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { EDebut } from '@/types/translation.d';

interface SubGroupTabsProps {
  tabValue: EDebut;
  onChangeSubGroup: (newValue: EDebut) => void;
  tabName: string;
}

const debutArray = Object.values(EDebut);

const SubGroupTabs: FC<SubGroupTabsProps> = ({
  onChangeSubGroup,
  tabName,
  tabValue,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));

  const onChangeSubGroupTab = (_: SyntheticEvent, newValue: EDebut) => {
    onChangeSubGroup(newValue);
  };

  const tabsVariant = isNotMobile ? 'fullWidth' : 'scrollable';

  return (
    <Stack gap={2}>
      <Divider />
      <Tabs
        value={tabValue}
        onChange={onChangeSubGroupTab}
        aria-label={`tab-subgroup-panel-for-${tabName}`}
        id={`subgroup-tab-${tabName}`}
        variant={tabsVariant}
        textColor="inherit"
        sx={{
          '& .MuiTabs-flexContainer': {
            gap: 2,
            // flexWrap: { xs: 'wrap', md: 'nowrap' },
          },
        }}
        //   orientation={isNotMobile ? 'horizontal' : 'vertical'}
      >
        {debutArray.map((tab) => (
          <Tab
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
      </Tabs>
      <Divider />
    </Stack>
  );
};

export default SubGroupTabs;
