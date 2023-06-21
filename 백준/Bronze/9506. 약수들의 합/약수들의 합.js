const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(v => Number(v));
input.pop();
for(const num of input){
    const divisor = [];
    for(let i = 1; i < num; i++){
        if(num % i === 0){
            divisor.push(i);
        }
    }
    const sum = divisor.reduce((acc, curr) => acc + curr, 0);
    const result = "";
    if(sum === num){
        console.log(`${num} = ${divisor.join(" + ")}`);
    }else{
        console.log(`${num} is NOT perfect.`)
    }
}