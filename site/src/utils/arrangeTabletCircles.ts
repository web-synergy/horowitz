import { RoundMemberData } from '@/libs/mockedData';

export interface CirclesType extends RoundMemberData {
  top: number;
  left: number;
  width: number;
}
const circleRadius = (
  centralElementWidth: number,
  smallElement: number,
  layer: number,
  gap: number
) => {
  return (
    centralElementWidth / 4 + smallElement * layer + gap / 2 + 0.2 * gap * layer
  );
};
export function arrangeCircles(
  width: number,
  members: RoundMemberData[],
  layers: number
) {
  const circles = [] as CirclesType[];

  const mainPerson = members.find((members) => members.group === 0);
  const others = members.filter((members) => members.group !== 0);
  const count = others.length;

  let remainingCircles = others.length; // Кількість кругів, які потрібно розмістити

  if (!mainPerson) return null;
  const smallCircle = width * 0.1;
  const centralCircleDiameter = smallCircle * 2;
  const startX = width / 2;
  const startY = width / 2;

  circles.push({
    top: startX - centralCircleDiameter / 2,
    left: startY - centralCircleDiameter / 2,
    width: centralCircleDiameter,

    ...mainPerson,
  });

  const gap = width * 0.01;
  // Розподіляємо круги по шарах

  const circlesPerLayer = [];

  for (let layer = 1; layer <= layers; layer++) {
    // const ratio = layer > 1 ? 1.5 : 0;
    const layerRadius = circleRadius(
      centralCircleDiameter,
      smallCircle,
      layer,
      gap
    );

    const layerLength = 2 * Math.PI * layerRadius; // Довжина окружності шару
    const ratio = layer === 2 ? 1.8 : 2;
    const approximateCount = Math.floor(
      layerLength / (width / (ratio * layers))
    ); // Початковий підхід до кількості кругів
    circlesPerLayer.push(approximateCount);
  }

  // Пропорційно коригуємо кількість кругів у шарах
  const totalApproximateCount = circlesPerLayer.reduce((sum, c) => sum + c, 0);
  for (let i = 0; i < layers; i++) {
    circlesPerLayer[i] = Math.floor(
      (circlesPerLayer[i] / totalApproximateCount) * count
    );
  }

  // Визначаємо максимальний діаметр кругів
  const maxDiameter = (width / (2 * layers)) * 0.8; // Трішки зменшуємо, щоб врахувати проміжки

  for (let layer = 1; layer <= layers; layer++) {
    const layerRadius = circleRadius(
      centralCircleDiameter,
      smallCircle,
      layer,
      gap
    );
    // Радіус поточного шару
    const currentCount = circlesPerLayer[layer - 1]; // Кількість кругів у поточному шарі
    // Кут між кругами

    const start = circles.length - 1;
    const end = start + currentCount + 1;

    const membersForLayer = others.slice(start, end);

    const angleStep = (2 * Math.PI) / membersForLayer.length;

    const membersWithPosition = membersForLayer.map((item, i) => {
      if (layer !== 2) {
        //Розміщення по всім кругам, окрім другого, де треба залишити місце під більшу картку для вчителя
        const theta = i * angleStep; // Кут
        //Окреме позиціювання для картки вчителя, що знахиться зверху зліва
        const shiftX =
          item.isTeacher && item.group === 1
            ? (maxDiameter / 2) * 1.3
            : maxDiameter / 2;
        const shiftY =
          item.isTeacher && item.group === 1
            ? (maxDiameter / 2) * 2.2
            : maxDiameter / 2;
        const top = Math.floor(startX + layerRadius * Math.cos(theta) - shiftX); // X-координата
        const left = Math.floor(
          startY + layerRadius * Math.sin(theta) - shiftY
        ); // Y-координата.
        return {
          ...item,
          top,
          left,
          width: item.isTeacher
            ? Math.floor(maxDiameter * 1.5)
            : Math.floor(maxDiameter),
        };
      } else {
        const angleStep = (2 * Math.PI) / (membersForLayer.length + 3);
        const centerElement = membersForLayer.length / 2;
        const theta =
          i < 2
            ? i * angleStep - 0.05 * Math.PI
            : i < centerElement + 3
            ? i * angleStep + 0.14 * Math.PI
            : i * angleStep + 0.35 * Math.PI; // Кут
        const shiftX =
          item.isTeacher && item.group === 1
            ? (maxDiameter / 2) * 1.7
            : maxDiameter / 2;
        const shiftY =
          item.isTeacher && item.group === 1
            ? (maxDiameter / 2) * 2.1
            : maxDiameter / 2;
        const top = Math.floor(startX + layerRadius * Math.cos(theta) - shiftX); // X-координата
        const left = Math.floor(
          startY + layerRadius * Math.sin(theta) - shiftY
        ); // Y-координата.
        return { ...item, top, left, width: Math.floor(maxDiameter) };
      }
    });
    circles.push(...membersWithPosition);
    remainingCircles = remainingCircles - membersWithPosition.length;
  }

  // Перевіряємо, чи всі круги розміщено
  if (remainingCircles > 0) {
    console.error('Увага! Не всі круги розміщено!');
  }

  return circles;
}
