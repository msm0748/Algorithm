const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const arr = input[1].split(" ");
let count = 0;
for(const num of arr){
    if(num === input[2]){
        count++;
    }
}
console.log(count);