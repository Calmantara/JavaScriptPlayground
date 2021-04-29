const dgram = require("dgram");

const client = dgram.createSocket("udp4");

client.send("Hello from client", 3500, "localhost", (err) => {
  console.log("Message sent to server");
});

client.on("message", (data) => {
  console.log("Msg from server:", data.toString());
});

client.on("end", () => {
  console.log("disconnected from server");
});
