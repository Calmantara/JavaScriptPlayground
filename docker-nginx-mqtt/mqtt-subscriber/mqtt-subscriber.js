const mqtt = require("mqtt");
const config = require("./config.json");

const clientProg1 = new mqtt.connect(
  `${config.scheme}://${config.server}:${config.port}`,
  (res) => {
    if (res) {
      console.log(`Connected ${res}`);
    }
  }
);
const clientProg2 = new mqtt.connect(
  `${config.scheme}://${config.server}:${config.port}`
);

clientProg1.on("connect", function (res) {
  console.log(res);
  clientProg1.subscribe("v1/prog1/temp", function (res) {});
  clientProg1.subscribe("v1/prog1/hum", function (res) {});
  clientProg1.subscribe("test/esp8266", (res) => {});
});
clientProg1.on("message", function (topic, message) {
  console.log(`topic: ${topic} payload:${message.toString()}`);
});
