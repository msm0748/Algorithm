const input = require('fs').readFileSync('/dev/stdin').toString().split(" ");;
const num = input[0];
let result = 0;
if(num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0)) {
    result = 1;
}
console.log(result);