function solution(code) {
    var answer = '';
    var mode = 0;
    for(let i = 0; i < code.length; i++){        
        if(code[i] === "1"){
            mode === 1 ? mode = 0 : mode = 1;
            continue;
        }
        if(mode === 0){
            if(i % 2 === 0){
                answer += code[i];
            }
        }else{
            if(i % 2 === 1){
                answer += code[i];
            }
        }
    }
    return answer ? answer : "EMPTY";
}