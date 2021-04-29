const Schema = require("./employees_pb");

const calman = new Schema.Employee();

calman.setId(1000);
calman.setName("Hello");
calman.setSalary(1900);

const arrEmployees = new Schema.Employees();

arrEmployees.addEmployees(calman);

console.log(arrEmployees.array[0]);
