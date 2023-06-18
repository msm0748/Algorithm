// 4
// 1 3 5 7

// 3
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const numbers = input[1].split(" ");
let result = 0;
for(const num of numbers){
    let primeNumber = [];
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            primeNumber.push(i);
        }
    }
    if(primeNumber.length === 2){
        result++;
    }
}
console.log(result);