const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const cutLine = input[0].split(" ")[1];
const score = input[1].split(" ");
score.sort((a, b) => b - a);
console.log(score[cutLine - 1]);