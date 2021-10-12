// Hoisting

var a = 9217;
b = 988812;

function numberAdder(val1, val2) {
  return val1 + val2;
}

var b; // Let is not working on Hoisting

console.log(numberAdder(a, b));

// Function Expression

var arrList = [1, 2, 3, 4, 5];
const arrAdder = function (arr) {
  const resVal = arr.reduce((val) => val * 2);
  return resVal;
};
console.log(arrAdder(arrList));

//Generator Function

function* tablesGenerator(number) {
  yield number;
  yield number * 2;
  yield number * 4;
  yield number * 5;
  yield number * 6;
  yield number * 7;
}

const tableValue = tablesGenerator(20);

for (let i = 0; i < 5; i++) {
  console.log(tableValue.next().value);
}

// Anonymous Functions
(function () {
  console.log("Not sure its an Anonymous Functions");
})();

setTimeout(() => {
  setTimeout(() => {
    console.log("Something went wrong..");
  }, 2000);
  console.log("Waiting...");
}, 1000);

//Function constructor in normal vs arrow

const normalFunction = new Function("a", "b", "return a + b");

const arrowFunction = (a, b) => {
  return a * b;
};

console.log(normalFunction(89, 129));
console.log(arrowFunction(89, 129)); // Arrow Function cannot be used with Constructor
