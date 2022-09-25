FROM node:18-alpine3.15

WORKDIR /app

COPY . .

RUN npm i

RUN npm run test

RUN npm run build

CMD npm run prod


