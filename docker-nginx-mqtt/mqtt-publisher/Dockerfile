FROM node:buster-slim

RUN mkdir -p /opt/app

WORKDIR /opt/app/

COPY . .

RUN npm install

CMD ["node", "mqtt-publisher.js"]
