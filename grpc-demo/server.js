const grpc = require("grpc");
const protoLoadr = require("@grpc/proto-loader");
const packageDef = protoLoadr.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const server = new grpc.Server();
server.bind("0.0.0.0:3000", grpc.ServerCredentials.createInsecure());
server.addService(todoPackage.todoPackage.service, {
  writeTodo: writeTodo,
  readTodos: readTodos,
});

server.start();

function writeTodo(call, callback) {
  console.log(callback);
}
function readTodos(call, callback) {
  console.log(callback);
}
