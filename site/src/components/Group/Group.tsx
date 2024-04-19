import { FC } from 'react';

interface GroupProps {
  title: string;
}

const Group: FC<GroupProps> = ({ title }) => {
  return <div>Group {title}</div>;
};

export default Group;
