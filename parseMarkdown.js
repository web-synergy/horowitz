const fs = require('fs');

// Функція для обробки кожного запису
function parseComposerData(mdContent) {
  // Розділяємо файл на блоки по кожному композитору

  return mdContent
    .split(/-new/) // Розділяємо записи, враховуючи порожні рядки
    .map((entry, index) => {
      const lines = entry.trim().split('\n');

      const group = Number(lines[0].trim());
      const firstLineMatch = lines[1].match(/([^()]+) \(([^,]+), ([^)]+)\)/);

      const name = firstLineMatch[1].trim();
      console.log(name);
      const years = firstLineMatch[2].trim();
      const place = firstLineMatch[3].trim();
      const linesLength = lines.length;
      const linkMatch = lines[linesLength - 1];
      const dataLines = lines
        .map((item) => item.trim())
        .slice(2, linesLength - 1);

      return {
        id: index + 1,
        group,
        name,
        years,
        place,
        data: dataLines.join('\n').trim(),
        link: linkMatch.trim(),
      };
    });
}

// Зчитуємо файл з даними
fs.readFile('composers.md', 'utf8', (err, mdContent) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Обробляємо вміст
  const composers = parseComposerData(mdContent);

  // Записуємо результат
  fs.writeFileSync(
    'composers.js',
    `export const composers: Composer[] = ${JSON.stringify(
      composers,
      null,
      2
    )};`
  );

  console.log('Дані успішно конвертовано у TypeScript файл!');
});
