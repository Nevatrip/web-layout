# Нормы frontend-разработки Nevatrip

## Стиль кода

- Отступы — 2 пробела
- HTML-атрибуты пишем в одну строку
- В CSS-стилях отделяем все вложенности, модификаторы, элементы, псевдоэлементы, псведоклассы, миксины пустой строкой:

```
.dke_languages {
  font-size: 14px;
  position: relative;

  &__current {
    padding: 10px 10px;
    position: relative;
    display: flex;

    &::after {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      background: #ffffff;
    }
  }
}
```

## Вёрстка

- Использовать БЭМ при вёрстке и стилизации макетов
  - Правила именования классов по БЭМ: `block-name__elem-name_mod-name_mod-val`
- Для всех классов использовать префикс `dke_` до окончательной интеграции новой вёрстки
- Использовать препроцессор SCSS при оформлении стилей
  - [Документация Sass/SCSS](https://sass-lang.com/documentation/)
- Адаптивная вёрстка:
  - Верстаем «desktop-first»
  - Через брейкпойнты `max-width`: `1199px`, `991px`,`767px`
  - Ширина контейнера: `1180px`, `970px`,`750px`, `100%`
  - Дополнительный брейкпойнт, который не влияет на контейнер: `575px`
  - Минимальная ширина контейнера `360px`. На более узких экранах показывать полосу прокрутки
- Использовать `box-sizing: border-box`
- Размеры и отступы в `px`
- В текстовых блоках использовать `margin-bottom` в единицах `em`
- Высота строки `line-height: 1.428`
- Для анимации использовать свойство `transition` с параметрами `.300 ease`
- Иконки вписывать в квадрат, то есть оборачивать в дополнительный контейнер
- Системные иконки кодируются в DataURI, иконки-«изображения» остаются в виде `.svg`-файла

## Структура проекта

```
├── src
│   ├── chunks
│   ├── icons
│   ├── images
│   ├── js
│   ├── pages
│   └── scss
│       ├── components
│       ├── pages
│       ├── main.scss
│       ├── _base.scss
│       ├── _colors_.scss
│       ├── _media.scss
│       └── _variables_.scss
├── dist
├── node_modules
├── package.json
├── package-lock.json
├── .babelrc
├── .gitignore
├── webpack.config.js
└── README.md
```

`src` — исходники проекта

- `chunks` — вёрстка шаблонов компонентов в формате Handlebars Partials `.hbs`

  - [Документация Handlebars](https://handlebarsjs.com/guide/partials.html#basic-partials)

- `icons` — иконки в формате .svg

- `images` — изображения

- `js` — JavaScript код отдельных модулей, функций

- `pages` — папка с `.hbs`-шаблонами страниц и `.js` точками входа для webpack

- `scss` — стили проекта в формате SCSS

  - `components` — стили компонентов: блоков, элементов и их модификатов

  - `pages` — стилевые файлы отдельных страниц

  - `_base.scss` — базовые стили проекта: `.wrapper`, `.container`, `body`, `html` и прочее

  - `_colors.scss` — Sass-переменные для палитры цветов

  - `_variables.scss` — остальные Sass-переменные

  - `_media.scss` — Sass-переменные для брейкпойнотов, размеров контейнера и миксины для медиа-запросов

`dist` — собранный проект (папка появляется после запуска сборки)

`node_modules` — установленные npm-пакеты

`package.json` — информация о проекте, версии, зависимостях, скриптах

`package-lock.json` — полное дерево зависимостей с привязкой к конкретной версии и метаинформацией

`.babelrc` — настройки компилятора Babel

`.gitignore` — исключения Git

`webpack.config.js` — настройки сборщика webpack

`README.md` — документация проекта

## Сборка проекта

В проекте установлен сборщик webpack.

- Компилирует SCSS в CSS и подключает к странице два файла: main.css (основые стили) и page-name.css (стили конкретной страницы)

Для этого в точку входа конкретной страницы нужно импортировать её стилевой файл:

`import '../scss/pages/page-name.scss';`

- Автоматически подставляет вендорные префиксы в CSS-файлы

- Транспилирует JS в ES5 и подключает к странице файл со скриптами

Для этого в точку входа конкретной страницы нужно импортировать все необходимые скрипты:

`import '../js/page-name.js';`

## Локальный запуск проекта

- Склонируйте репозиторий
- Запустите `npm install` в корне локального репозитория
- Запустите `npm run watch`

## Скрипты

- `npm run watch` — запуск webpack dev-сервера
- `npm run build` — сборка проекта в prod-режиме

## Инструкции

### Как добавить новую страницу (точку входа) в конфигурацию webpack

Создаём папку под новую страницу:

`src/pages/page-name`

Далее нужно создать три файла:

- `src/pages/page-name/page-name.hbs` — шаблон страницы
- `src/pages/page-name/index.js` — точка входа для новой страницы
- `src/scss/pages/page-name.scss` — файл стилей конкретной страницы

После чего нужно импортировать файл стилей в точку входа:

```
import '../scss/pages/page-name.scss';
```

Далее нужно добавить информацию о странице в массив `PAGES` в `webpack.config.js`:

```
const PAGES = [
...

  {
    dir: 'page-name',
    filename: 'page-name',
  },
];
```

Где `dir` — название папки для страницы, `filename` — название `.hbs` шаблона страницы.

### Как пользоваться Handlebars

Допустим, надо сверстать хедер. Создаём в папке `chunks` файл `header.hbs` и верстаем как обычный HTML. После чего для основной страницы тоже создаем файл Handlebars, например `index.hbs`. С помощью синтаксиса `{{> './chunks/header.hbs'}}` инжектим разметку нашего компонента в разметку страницы.

### Как правильно использовать Sass-переменные, функции и вообще импортировать Sass-файлы

Sass начинает отказываться от директивы `@import`. В дальнейшем она совсем исчезнет из языка препроцессора. Поэтому сейчас нужно использовать директиву `@use`. Она создаёт блочную видимость и пространство имён для файлов Sass. Таким образом переменные, функции и миксины больше не будут глобально доступны.

```
@use '../colors'

h1 {
  color: colors.$main;
}
```

В этом примере мы импортируем файл `_colors.scss`. Модули Sass нужно именовать с префиксом `_*`. При импорте имя вводится без префикса и расширения. После чего, чтобы использовать переменные, нужно обратиться к ним через пространство имён `colors`. Допустим, в файле `_colors.scss` задана переменная `$main: #dd2211;`. Чтобы обратиться к ней, нужно использовать следующую запись: `colors.$main`.

### Как использовать миксины для медиа запросов

```
@include media.lg {
  width: 1180px;
}
```

Эквивалентно

```
@media screen and (max-width: $xlWidth) {
  width: 1180px;
}
```

### Как использовать иконки в проекте

Подключать иконки можно в теге `<img>` или в свойстве CSS `background`.

Если иконка системная: чекбокс, дроп-даун, крестик и подобное, то именуем её с постфиксом `*.system.svg`. Полное название иконки будет: `icon.system.svg`. Тогда иконка будет автоматически кодироваться в dataURI.

Иконки-«изображения» называем без постфикса: логотипы, какие-то схематичные картинки и подобное. Они будут сохраняться в виде отдельного svg-файла.

Если требуется сделать анимацию или как-то взаимодействовать с иконкой, допустимо вставить исходный код иконки в теге `<svg>`.
