# Build stage
FROM node:20 AS build

WORKDIR /usr/src/app

COPY package*.json ./ 

RUN npm install

COPY . .

RUN npm run tsc

# Production stage
FROM node:20

WORKDIR /usr/src/app  

COPY package*.json ./

RUN npm ci -omit=dev

COPY --from=build /usr/src/app/build /usr/src/app/build

EXPOSE 3001

CMD ["node", "build/index.js"]
