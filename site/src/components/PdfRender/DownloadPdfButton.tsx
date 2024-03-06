import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button } from '@mui/material';
const DownloadPdfButton = ({ pdfUrl, name }) => {
  const handleDownload = async () => {
    try {
      // Отримуємо PDF файл за URL
      const response = await fetch(pdfUrl);
      const pdfBlob = await response.blob();

      // Створюємо посилання для завантаження PDF файлу
      const url = window.URL.createObjectURL(pdfBlob);

      // Створюємо тимчасове посилання для завантаження файлу
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', name);

      // Додаємо посилання на сторінку та натискаємо на нього
      document.body.appendChild(link);
      link.click();

      // Видаляємо тимчасове посилання після завершення завантаження
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Помилка при завантаженні файлу:', error);
    }
  };

  return (
    <Button variant='tertiary' onClick={handleDownload}>
      <FileDownloadIcon />
    </Button>
  );
};

export default DownloadPdfButton;
