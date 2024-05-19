import { FC } from 'react';
import { Tabs, Debut } from '@/types/translation.d';
import DebutMain from './parts/DebutMain';
import JuniorGroup from './parts/JuniorGroup';
import DebutGroup from './parts/DebutGroup';

import { useJuniorGroupStore } from '@/store/juniorGroupStore';

interface JuniorParticipantsPageProps {
  group: Tabs | Debut;
}

const JuniorParticipantsPage: FC<JuniorParticipantsPageProps> = ({ group }) => {
  const { junior, debut } = useJuniorGroupStore();

  if (!junior || !debut) {
    return;
  }

  switch (group) {
    case Tabs.JUNIOR:
      return <JuniorGroup />;

    case Debut.GROUP_A: {
      return <DebutGroup participants={debut.groupA} title={Debut.GROUP_A} />;
    }

    case Debut.GROUP_B: {
      return <DebutGroup participants={debut.groupB} title={Debut.GROUP_B} />;
    }

    case Debut.GROUP_C: {
      return <DebutGroup participants={debut.groupC} title={Debut.GROUP_C} />;
    }

    case Debut.GROUP_D: {
      return <DebutGroup participants={debut.groupD} title={Debut.GROUP_D} />;
    }

    default:
      return <DebutMain />;
  }
};

export default JuniorParticipantsPage;
