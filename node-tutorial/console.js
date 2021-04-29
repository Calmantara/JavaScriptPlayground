var smallFunction = function () {
  console.trace("Let us look at the trace");
};

var bigFunction = function () {
  smallFunction();
};

bigFunction();

console.time("For loop time");
for (let i = 0; i < 100; i++) {
  // processing
}
console.timeEnd("For loop time");

console.table([
  { Fruit: "Apple", Quantity: 5 },
  { Fruit: "Mango", Quantity: 7 },
]);
