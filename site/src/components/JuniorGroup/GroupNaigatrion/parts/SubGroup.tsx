import { FC, ElementType } from 'react';
import { EDebut } from '@/types/translation.d';
import TabPannel from './TabPannel';

interface SubGroupProps {
  tabValue: EDebut;
  currentValue: EDebut;
  subGroup: ElementType;
}

const SubGroup: FC<SubGroupProps> = ({
  currentValue,
  tabValue,
  subGroup: SubGroup,
}) => {
  return (
    <TabPannel activeValue={tabValue} value={currentValue} name={currentValue}>
      <SubGroup title={currentValue} />
    </TabPannel>
  );
};

export default SubGroup;
