Проект сейчас находится на этапе MVP работают кнопки войти и зарегистрироваться(данные вводить не нужно). Чтобы при открытии чата появится ошибка 404. На странице профиля если попытаться изменить данные это вызовет ошибку 500.

Дизайн-проект можно посмотреть по ссылке https://www.figma.com/file/OvZHFHkCe8HWUF0GcjF1Kd/Chat?node-id=1%3A498

Netlify https://quirky-darwin-602093.netlify.app/

Для запуска проекта необходимо ввести команду npm run start

При создании проекта использовался шаблонизатор pug и sass

Были использованыследующие команды для подключения и настройки рабочего пространства 

npm install node --save-dev установка nodjs

npm install parcel --save-dev установка parcel

npm install express --save-dev установка express

npm install pug установка шаблонизатора pug

npm install -g sass установка препроцессора sass

sass --watch src/styles:dist отслживание изменений в файлах стилей

pug src/ --out dist --pretty отслеживание изменений в файлах проекта

npm run dev запуск проекта для разработки

Спецификации HTML, CSS.
Parcel
Pug
SASS
Express
NodeJS
Eslint
Stylelint
EventBus
Proxy
Компоненты
