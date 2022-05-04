FROM node:14.18.1-alpine
WORKDIR /usr/src/app
COPY package*.json ./

RUN rm -rf node_modules
RUN rm package-lock.json
RUN npm cache clear --force
RUN npm install
RUN npm install webpack --save
RUN npm install codegen
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
