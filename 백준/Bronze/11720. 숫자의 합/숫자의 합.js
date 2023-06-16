const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let sum = 0;
for(const num of input[1]){
    sum += Number(num);
}
console.log(sum);