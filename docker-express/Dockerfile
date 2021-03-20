FROM node:buster-slim

RUN mkdir -p /opt/app

WORKDIR /opt/app/

COPY index.js .
COPY package*.json .

RUN npm install

CMD ["node", "index.js"]
