const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let result = "";
const maxLength = Math.max(...input.map(word => word.length));
for(let i = 0; i < maxLength; i++){
    for(let j = 0; j < input.length; j++){
        if(input[j][i]){
            result += input[j][i];
        }
    }
}
console.log(result);