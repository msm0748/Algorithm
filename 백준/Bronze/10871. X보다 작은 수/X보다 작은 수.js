const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [count, x] = input[0].split(" ");
const arr = input[1].split(" ");
const result = [];
for(const num of arr){
    if(Number(num) < Number(x)){
        result.push(Number(num));
    }
}
console.log(result.join(" "));