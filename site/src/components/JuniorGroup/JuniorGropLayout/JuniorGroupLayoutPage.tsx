import GroupLayout from '@/components/GroupPages/GroupLayout/GroupLayout';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';

const JuniorGroupLayoutPage = () => {
  const { isLoading } = useJuniorGroupStore();
  return <GroupLayout groupLoading={isLoading} />;
};

export default JuniorGroupLayoutPage;
