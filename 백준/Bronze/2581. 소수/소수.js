// 60
// 100

// 620
// 61
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const arr = [];

for(let i = Number(input[0]); i <= Number(input[1]); i++){
    const primeNumber = [];
    for(let j = 1; j <= i; j++){
        if(i % j === 0){
            primeNumber.push(j);
        }
    }
    if(primeNumber.length === 2){
        arr.push(i);
    }
}
const sum = arr.reduce((acc, curr) => acc + curr, 0);
if(sum && arr[0]){
    console.log(sum);
    console.log(arr[0]); 
}else{
    console.log(-1);
}
