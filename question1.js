// Menu Driven Program
const prompt = require("prompt-sync")();

// 1. Add Two Numbers (arrow + callback)
const add = (a, b, callback) => {
  const sum = a + b;
  callback(sum);
};

// 2. Check Even or Odd (anonymous)
const checkEvenOdd = function (num) {
  console.log(num % 2 === 0 ? "Even" : "Odd");
};

// 3. Multiply Two Numbers + Check > 100 (arrow + anonymous callback)
const multiply = (a, b, callback) => {
  const result = a * b;
  callback(result);
};

while (true) {
  console.log("\n1.Add\n2.Even/Odd\n3.Multiply & Check\n4.Exit");
  let choice = Number(prompt("Enter choice: "));

  if (choice === 1) {
    let a = Number(prompt("A: "));
    let b = Number(prompt("B: "));
    add(a, b, (sum) => console.log("Sum =", sum));

  } else if (choice === 2) {
    let n = Number(prompt("Number: "));
    checkEvenOdd(n);

  } else if (choice === 3) {
    let a = Number(prompt("A: "));
    let b = Number(prompt("B: "));
    multiply(a, b, function (res) {
      console.log(res > 100 ? "Result > 100" : "Result ≤ 100");
    });

  } else if (choice === 4) {
    break;
  }
}