const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const numbers = input.map((n) => n.split(" ").map(Number));
let maxVal = 0;
let maxY = 0;
let maxX = 0;
for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
        if(maxVal < numbers[i][j]){
            maxVal = numbers[i][j];
            maxY = i;
            maxX = j;
        }
    }
}
console.log(maxVal);
console.log(`${maxY + 1} ${maxX + 1}`);