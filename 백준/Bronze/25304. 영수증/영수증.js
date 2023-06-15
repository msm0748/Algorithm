const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let sum = 0;
const cnt = Number(input[1]);
for (let i = 2; i <= cnt + 1; ++i) {
    const arr = input[i].split(' ');
    const price = Number(arr[0]);
    const count = Number(arr[1]);
    sum += price * count;
}
if(Number(input[0]) === sum){
    console.log("Yes");
}else{
    console.log("No")
}