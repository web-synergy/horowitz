export interface CirclesType {
  x: number;
  y: number;
  d: number;
  l: number;
}

export function arrangeCircles(d: number, count: number, layers: number) {
  const circles = [] as CirclesType[];
  const R = (d * 0.9) / 2; // Радіус великого круга
  let remainingCircles = count; // Кількість кругів, які потрібно розмістити

  const centralCircleDiameter = (d / (2 * layers)) * 1.1;
  circles.push({
    x: 0,
    y: 0,
    d: centralCircleDiameter,
    l: 0,
  });

  // Розподіляємо круги по шарах
  const circlesPerLayer = [];
  for (let layer = 1; layer <= layers; layer++) {
    const layerRadius = (layer * R) / layers; // Радіус шару
    const layerCircumference = 2 * Math.PI * layerRadius; // Довжина окружності шару
    const approximateCount = Math.floor(
      layerCircumference / (d / (2 * layers))
    ); // Початковий підхід до кількості кругів
    circlesPerLayer.push(approximateCount);
  }

  // Пропорційно коригуємо кількість кругів у шарах
  const totalApproximateCount = circlesPerLayer.reduce((sum, c) => sum + c, 0);
  for (let i = 0; i < layers; i++) {
    circlesPerLayer[i] = Math.round(
      (circlesPerLayer[i] / totalApproximateCount) * count
    );
  }

  // Визначаємо максимальний діаметр кругів
  const maxDiameter = (d / (2 * layers)) * 0.8; // Трішки зменшуємо, щоб врахувати проміжки

  for (let layer = 1; layer <= layers; layer++) {
    const layerRadius = (layer * R) / layers; // Радіус поточного шару
    const currentCount = circlesPerLayer[layer - 1]; // Кількість кругів у поточному шарі
    const angleStep = (2 * Math.PI) / currentCount; // Кут між кругами

    for (let i = 0; i < currentCount; i++) {
      const theta = i * angleStep; // Кут
      const x = Math.floor(layerRadius * Math.cos(theta)); // X-координата
      const y = Math.floor(layerRadius * Math.sin(theta)); // Y-координата

      circles.push({
        x,
        y,
        d: Math.floor(maxDiameter),
        l: layer,
      });
    }

    remainingCircles -= currentCount;
  }

  // Перевіряємо, чи всі круги розміщено
  if (remainingCircles > 0) {
    console.error('Увага! Не всі круги розміщено!');
  }

  return circles;
}
