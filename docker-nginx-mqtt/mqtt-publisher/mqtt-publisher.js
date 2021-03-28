const mqtt = require("mqtt");
const config = require("./config.json");

const client = mqtt.connect(
  `${config.scheme}://${config.server}:${config.port}`,
  (res) => {
    if (res) {
      console.log(`Connected ${res}`);
    }
  }
);

client.on("connect", (res) => {
  console.log(res);
});

const loop = async () => {
  let index = 0;
  for (let i = 0; i < 1; ++i) {
    setInterval(() => {
      client.publish(
        "v1/prog1/temp",
        JSON.stringify({
          id: index,
          client: process.env.CLIENT || config.clientName,
          sensor: "Temperature",
          values: Math.random(),
        })
      );
      client.publish(
        "v1/prog1/hum",
        JSON.stringify({
          id: index,
          client: process.env.CLIENT || config.clientName,
          sensor: "Humidity",
          values: Math.random(),
        })
      );
      index += 1;
    }, 2000);
  }
};
loop();
