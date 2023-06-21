const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(n => Number(n));
const divisor = [];
const num = input[0];
const k = input[1];
for(let i = 1; i <= num; i++){
    if(num % i === 0){
        divisor.push(i);
    }
}
if(divisor[k - 1]){
    console.log(divisor[k - 1]);
}else{
    console.log(0);
}