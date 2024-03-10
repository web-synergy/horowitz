Розробки основної частини:

    1. Стилізація:
        - максимально стилізуємо через тему
        - масивні елементи з інлайн стилями виносимо до файлу styled.tsx;
        - іконки виносимо в спрайт.



    2. Структура компонентів:
        - загальні компоненти в папці Common.
        - ділимо компоненти в залежності від розміщення.
        - структура в папці components:
                Common => SharedLayout, Templates, Button, SvgIcon...
                Header
                Footer
                NotFound
                .... Далі в залежності від назви сторінки: Main, About ....
        - найменування файлів та папок в самому компоненті:
                MainComponent.tsx
                parts - папка з всіма частинами
                styled.tsx - якщо потрібно стилізація через styled

    3. Структура папок:
        - api - запити до адмінки, налаштування клієнта саніті;
        - utils - додаткові функції для обробки даних;
        - libs - константи, статичні дані;
        - config - додаткові налаштування, наприклад, налаштування i18n
        - store - все що стосується стору  - беремо для конкурсу zustand
        - theme - тема до material.ua
        - components -  компоненти додатку
        - types - всі типи
        - fonts - шрифти

    4. Використання кнопок та посилань:
        -primary button:
            <Button>Заявка на участь</Button>

        -secondary button with icon:
            <Button variant="secondary" endIcon={<SvgSpriteIcon icon="phone" />}>
                Підтримати проєкт
            </Button>

        - link (на макеті має тип tertiary) => Link - це компонент Link з бібліотеки MaterialUI, RouterLink - це Link з бібліотеки react-router-dom:
            <Link component={RouterLink} to="/about">
                Переглянути всі
                <SvgSpriteIcon icon="arrow" sx={{ transform: 'rotate(-90deg)' }} />
            </Link>

5. Папка з шаблонами (Templates):
   -
