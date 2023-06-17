const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for(let i = 1; i <= input[0]; i++){
    let result = "";
    const [idx, str] = input[i].split(" ");
    for(let j = 0; j < str.length; j++){
        result += str[j].repeat(idx)
    }
    console.log(result)
}