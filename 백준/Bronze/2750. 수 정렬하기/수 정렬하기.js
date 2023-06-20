const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
const arr = [...input].sort((a, b) => a - b);
for(const num of arr){
    console.log(num);
}