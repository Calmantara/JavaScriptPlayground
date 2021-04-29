const fs = require("fs");
const employee = [];

employee.push({
  name: "Hussein",
  salary: 1000,
  id: 1001,
});
employee.push({
  name: "Ahmed",
  salary: 2000,
  id: 1002,
});
employee.push({
  name: "Hussein2",
  salary: 10000,
  id: 1003,
});
employee.push({
  name: "Ahmed2",
  salary: 20000,
  id: 1004,
});

console.table(employee);
fs.writeFileSync("employeefromjs.json", JSON.stringify(employee));
