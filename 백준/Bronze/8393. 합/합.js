let input = require('fs').readFileSync('/dev/stdin').toString().split(" ");

let num = Number(input[0]);
let result = 0;
for(let i = 1; i <= num; i++){
    result += i;
}
console.log(result);