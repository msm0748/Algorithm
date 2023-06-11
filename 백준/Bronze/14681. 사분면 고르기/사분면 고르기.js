const input = require("fs").readFileSync(0).toString().split("\n");
const num1 = Number(input[0]);
const num2 = Number(input[1]);
if(num1 > 0 && num2 > 0){
    console.log("1");
}else if(num1 < 0 && num2 > 0){
    console.log("2");
}else if(num1 < 0 && num2 < 0){
    console.log("3");
}else{
    console.log("4")
}