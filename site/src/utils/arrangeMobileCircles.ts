import { RoundMemberData } from '@/libs/mockedData';

export const arrangeMobileCircles = (
  width: number,
  isEven: boolean,
  members: RoundMemberData[]
) => {
  const smallCircleWidth = Math.floor(width * 0.12);
  const mediumCircleWidth = smallCircleWidth * 1.8;
  const bigCircleWidth = smallCircleWidth * 2.5;

  const centerX = isEven
    ? smallCircleWidth / 2
    : width - smallCircleWidth / 2 - bigCircleWidth;

  const centerY = width / 2 - bigCircleWidth / 2;
  const gap = width * 0.01;

  const membersArray = members.filter(
    (member) => !member.isTeacher && member.group !== 0
  );

  let round = 1;
  const smallCircleArray = [];
  let count = 0;

  while (count < membersArray.length) {
    const radiusOfCurrentCircle =
      bigCircleWidth / 2 +
      2 * gap +
      (smallCircleWidth / 2 + 2 * gap) * round +
      (smallCircleWidth / 2) * (round - 1);

    const arcPart = isEven ? 0.7 : 0.6;
    const arcLength =
      radiusOfCurrentCircle * 2 * Math.PI * arcPart - mediumCircleWidth - gap;

    const totalCirclesOnRound = Math.floor(
      arcLength / (smallCircleWidth * 1.05 + gap + round * 2)
    );

    const memberForRound = membersArray.slice(
      smallCircleArray.length,
      smallCircleArray.length + totalCirclesOnRound
    );

    const startPosition = round < 3 ? 0.64 : 0.4;
    const startAngle = isEven
      ? -(0.63 - (round - 1) * 0.04) * Math.PI
      : (startPosition + (round - 1) * 0.02) * Math.PI;

    const endAngle = isEven
      ? 0.7 * Math.PI
      : (1.8 - (round - 1) * 0.06) * Math.PI;
    const angleStep = (endAngle - startAngle) / (totalCirclesOnRound + 1);

    const roundCircles = memberForRound.map((item, i) => {
      const angle = startAngle + i * angleStep;
      const top = Math.floor(centerX + radiusOfCurrentCircle * Math.cos(angle));
      const left = Math.floor(
        centerY - radiusOfCurrentCircle * Math.sin(angle)
      );
      return {
        top: top + bigCircleWidth / 3,
        left: left + bigCircleWidth / 3.3,
        ...item,
      };
    });
    smallCircleArray.push(...roundCircles);
    round++;
    count = count + totalCirclesOnRound;
  }

  const height = bigCircleWidth + 1.9 * round * smallCircleWidth;

  return {
    gap,
    height,
    smallCircleArray,
    smallCircleWidth,
    mediumCircleWidth,
    bigCircleWidth,
    centerX,
    centerY,
  };
};
