const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const num1 = [...input[0]].reverse().join("");
const num2 = [...input[1]].reverse().join("");
console.log(Number(num1) > Number(num2) ? Number(num1) : Number(num2));