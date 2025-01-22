import { RoundMemberData } from '@/libs/mockedData';
import { CirclesType } from './arrangeCircles';
import { ROUNDS } from '@/components/GliersRounds/GliersRounds';

interface ResultType extends RoundMemberData, CirclesType {}

export const concatPositionWithData = (
  circles: CirclesType[],
  firstPart: RoundMemberData[],
  secondPart: RoundMemberData[]
) => {
  const firstGravity = Math.floor(
    (firstPart.length / (firstPart.length + secondPart.length)) * 100
  );

  let commonResult = [] as ResultType[];
  let firstGroupAddedMembers = 0;
  let secondGroupAddedMembers = 0;

  commonResult.push({
    ...circles[0],
    name: 'Глієр',
    years: 'years',
    color: '#e0e0e0',
  });

  for (let i = 1; i <= ROUNDS; i++) {
    const layersCircles = circles.filter((item) => item.l === i);

    if (i === ROUNDS) {
      const firstPartCount = firstPart.length - firstGroupAddedMembers;
      const secondPartCount = secondPart.length - secondGroupAddedMembers;

      const firstPartMembers = firstPart.slice(-firstPartCount);
      const secondPartMembers = secondPart.slice(-secondPartCount);
      const result = [...secondPartMembers, ...firstPartMembers].map(
        (item, index) => {
          return {
            ...item,
            ...layersCircles[index],
          };
        }
      );
      commonResult = [...commonResult, ...result];
    } else {
      const firstPartCount = Math.floor(
        (layersCircles.length * firstGravity) / 100
      );

      const secondPartCount = layersCircles.length - firstPartCount;
      const firstPartMembers = firstPart.slice(
        firstGroupAddedMembers,
        firstGroupAddedMembers + firstPartCount
      );
      const secondPartMembers = secondPart.slice(
        secondGroupAddedMembers,
        secondGroupAddedMembers + secondPartCount
      );

      firstGroupAddedMembers += firstPartCount;
      secondGroupAddedMembers += secondPartCount;

      const result = [...secondPartMembers, ...firstPartMembers].map(
        (item, index) => {
          return {
            ...item,
            ...layersCircles[index],
          };
        }
      );
      commonResult = [...commonResult, ...result];
    }
  }

  return commonResult;
};
