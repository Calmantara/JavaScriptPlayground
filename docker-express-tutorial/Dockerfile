FROM node:stretch-slim

RUN mkdir -p /opt/app

WORKDIR /opt/app

COPY server.js .
COPY package*.json .

RUN npm install

CMD ["node", "server.js"]
