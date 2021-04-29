const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  res.send({
    msg: `HELLO WORLD FROM ${process.env.CONTAINERNAME}`,
    status: 200,
  });
});

app.listen(3000, () => {
  console.log("App is running in port 3000");
});
