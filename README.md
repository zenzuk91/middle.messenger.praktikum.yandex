# Проект Messenger
  Веб приложение "Чат"

### Обзор
* [Описание](#description)
* [Инструкция](#instructions)
* [Технологии](#technologies)

#### <a name="description">Описание</a>
* [Ссылка на макет в Figma](https://www.figma.com/file/OvZHFHkCe8HWUF0GcjF1Kd/Chat?node-id=1%3A498)
* [Ссылка PR](https://github.com/zenzuk91/middle.messenger.praktikum.yandex/pull/5)
* [Ссылка на heroku](https://zenzuks.herokuapp.com/)

#### <a name="instructions">Инструкция</a>
* [Ссылка на проект в Netlify](https://quirky-darwin-602093.netlify.app/)

##### Запуск

```
npm install
npm run start / npm run dev
```

##### Запуск тестов

```
npm run test
```

##### Запуск docker контейнера

###### Сборка
```
docker build . -t zenzuks
```

###### Запуск в фоне

```
docker run -p 3000:3000 -d zenzuks
```

###### Остановка

```
docker ps
docker stop -t 0 <container id>
```

###### Удаление

```
docker ps
docker container rm <container id>
```

#### <a name="technologies">Технологии</a>
* Спецификации HTML, CSS.
* Parcel
* Pug
* SASS
* Express
* NodeJS
* Eslint
* Stylelint
* EventBus
* Proxy
* Компоненты
* HTTPTransport
* Store
* Route
* Router
* Chai
* Mocha
* Sinon
* JSDom
* Docker
* Webpack