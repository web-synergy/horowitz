import { FC, SyntheticEvent } from 'react';
import { useTheme, useMediaQuery, Tab, Tabs, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ETabs } from '@/types/translation.d';

interface GroupTabsProps {
  tabValue: ETabs;
  onChangeTab: (value: ETabs) => void;
  tabName: string;
}

const tabsArray = Object.values(ETabs);

const GroupTabs: FC<GroupTabsProps> = ({ onChangeTab, tabValue, tabName }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));

  const onChangeTabValue = (_: SyntheticEvent, newValue: ETabs) => {
    onChangeTab(newValue);
  };

  return (
    <Tabs
      value={tabValue}
      onChange={onChangeTabValue}
      aria-label={`tab-panel-for-${tabName}`}
      id={`tab-${tabName}`}
      variant="fullWidth"
      orientation={isNotMobile ? 'horizontal' : 'vertical'}
      sx={{
        '& .MuiTabs-indicator': {
          backgroundColor: 'transparent',
        },
      }}
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
    </Tabs>
  );
};

export default GroupTabs;

const GroupTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  backgroundColor: 'transparent',
  border: '1px solid',
  borderColor: theme.palette.primary.main,
  borderRadius: '4px',
  color: theme.palette.common.black,

  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
  '&.Mui-selected': {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.primary.main,
  },
  '&.Mui-focusVisible': {
    backgroundColor: theme.palette.primary.main,
  },

  '&:last-child': {
    marginTop: 24,
  },

  [theme.breakpoints.up('md')]: {
    '&:last-child': {
      marginLeft: 24,
      marginTop: 0,
    },
  },

  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
  },
}));
