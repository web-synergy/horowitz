import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  Box,
  Divider,
} from '@mui/material';
import { ParticipantType } from '@/types/groupTypes';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import GridTemplate from '@/components/Templates/GridTemplate';
import ParticipantCard from './ParticipantCard';
import { startThreeCards, endThreeCards } from '@/assets/constants';
import { Buttons } from '@/types/translation.d';

interface GroupListProps {
  title: string;
  participants: ParticipantType[];
  goTo: string;
}

const GroupList: FC<GroupListProps> = ({ participants, title, goTo }) => {
  const theme = useTheme();
  const start = useMediaQuery(theme.breakpoints.up(startThreeCards));
  const end = useMediaQuery(theme.breakpoints.down(endThreeCards));
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isThreeCards = start && end;
  const renderParticipants = participants.slice(0, isThreeCards ? 4 : 3);

  const onClickViewMore = () => {
    navigate(goTo);
  };
  return (
    <CommonStackWrapper>
      <Typography variant="h1" component="h2">
        {title}
      </Typography>
      <GridTemplate gridItem={ParticipantCard} list={renderParticipants} />
      <Box sx={{ mx: 'auto' }}>
        <Button variant="transparent" role="link" onClick={onClickViewMore}>
          {t(`buttons.${Buttons.VIEW_ALL}`)}
        </Button>
      </Box>
      <Divider flexItem />
    </CommonStackWrapper>
  );
};

export default GroupList;
