const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
let hours = input[0];
let minutes = input[1] - 45;

if(minutes < 0){
    hours -= 1;
    if(hours < 0){
        hours += 24;
    }
    minutes += 60;
}
console.log(`${hours} ${minutes}`);