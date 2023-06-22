function solution(numLog) {
    var answer = '';
    var currentValue = numLog[0];
    for(let i = 1; i < numLog.length; i++){
        if(currentValue - numLog[i] === -1){
            answer += "w";
        }
        if(currentValue - numLog[i] === 1){
            answer += "s";
        }
        if(currentValue - numLog[i] === -10){
            answer += "d";
        }
        if(currentValue - numLog[i] === 10){
            answer += "a";
        }
        currentValue = numLog[i];
    }
    return answer;
}