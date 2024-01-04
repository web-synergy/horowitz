.htaccess - файл для розміщення реакт додатку на статичному хостингу (для вирішення питань з помилкою 404 при перезавантаженні)

Скрипти для роботи:

    Встановлення залежностей:
        "update-cms": "cd cms && npm install",
        "update-main": "cd site && npm install",

    Запустити проект локально:
        "main": "cd site && npm run dev",
        "cms": "cd cms && npm run dev",

    Сбілдити проект локально:
        "build-cms": "cd cms &&npm run build",
        "build-main": "cd site && npm run build"
