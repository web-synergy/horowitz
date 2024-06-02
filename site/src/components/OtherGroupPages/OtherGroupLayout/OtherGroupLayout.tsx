import { useOtherGroupStore } from '@/store/otherGroupStore';
import GroupLayout from '@/components/GroupPages/GroupLayout/GroupLayout';

const OtherGroupLayout = () => {
  const { isLoading } = useOtherGroupStore();
  return <GroupLayout groupLoading={isLoading} />;
};

export default OtherGroupLayout;
