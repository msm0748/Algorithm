const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const num1 = Number(input[0]);
const num2 = input[1];
console.log(num1 * Number(num2[2]));
console.log(num1 * Number(num2[1]));
console.log(num1 * Number(num2[0]));
console.log(num1 * Number(num2));