const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solution(str){
    const strArray = [...str];
    const result = strArray.map((value) => {
        const upperCaseStr = value.toUpperCase();
        if(value === upperCaseStr){
            return value.toLowerCase()
        }else{
            return value.toUpperCase()
        }
    })
    return [...result].join("");
}

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const result = solution(str);
    console.log(result)
    
});