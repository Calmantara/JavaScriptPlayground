const EventEmitter = require("events");

const myEmitter = new EventEmitter();
module.exports = () => {
  someFunction = function () {
    console.log("Something has happened!");
  };
  myEmitter.on("Some event1", someFunction);
};
