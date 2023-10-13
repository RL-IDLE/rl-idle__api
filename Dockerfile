FROM node:18-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
ENV PORT 3000
ENV NODE_ENV production

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY scrips/package.json ./scrips/
COPY scrips/package-lock.json ./scrips/
RUN cd scrips && npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
