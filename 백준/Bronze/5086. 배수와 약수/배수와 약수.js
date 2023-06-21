const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input.pop();
for(const numbers of input){
    const num = numbers.split(" ").map(n => Number(n));
    if(num[1] % num[0] === 0){
        console.log("factor");
    }else if(num[0] % num[1] === 0){
        console.log("multiple");
    }else{
        console.log("neither")
    }
}