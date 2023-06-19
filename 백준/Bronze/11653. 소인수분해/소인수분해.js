const input = require("fs").readFileSync("/dev/stdin").toString();
let num = Number(input);
for(let i = 2; i <= num; i++){
    while (num % i === 0) {
        num /= i;
        console.log(i);
    }
    if (num === 1) break;
}