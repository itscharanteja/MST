const calc = require("./Calc");

try {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  function performOperations() {
    rl.question("Enter the first number: ", (num1) => {
      rl.question("Enter the second number: ", (num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        if (isNaN(num1) || isNaN(num2)) {
          console.log("Invalid number");
          rl.close();
          return;
        }
        console.log("Addition: ", calc.add(num1, num2));
        console.log("Subtraction: ", calc.subtract(num1, num2));
        console.log("Multiplication: ", calc.multiply(num1, num2));
        console.log("Division: ", calc.divide(num1, num2));
        rl.close();
      });
    });
  }
  performOperations();
} catch (err) {
  console.error(err);
}
