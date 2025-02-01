import { RoundMemberData } from '@/libs/mockedData';
import { CirclesType } from './arrangeCircles';

interface ResultType extends RoundMemberData, CirclesType {}

export const concatPositionWithData = (
  circles: CirclesType[],
  data: RoundMemberData[]
) => {
  const firstMember: RoundMemberData = {
    name: 'Глієр',
    years: 'years',
    group: 0,
    data: '',
  };
  const commonResult = [firstMember, ...data];

  return commonResult.reduce((acc, item, i) => {
    const newCircle: ResultType = { ...item, ...circles[i] };
    return [...acc, newCircle];
  }, [] as ResultType[]);
};
