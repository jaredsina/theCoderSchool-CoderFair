FROM node:20

WORKDIR /usr/src/app/backend

COPY . .

RUN npm install

CMD ["npm","run","dev"]