import GridTemplate from '@/components/Templates/GridTemplate';
import ParticipantCard from './ParticipantCard';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';

const JuniorGroup = () => {
  const { junior } = useJuniorGroupStore();
  if (!junior) {
    return;
  }

  return (
    <>
      <GridTemplate list={junior} gridItem={ParticipantCard} />
    </>
  );
};

export default JuniorGroup;
