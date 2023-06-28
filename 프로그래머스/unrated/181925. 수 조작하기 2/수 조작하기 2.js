function solution(numLog) {
    var answer = '';
    var currentValue = numLog[0];
    for(const num of numLog){
        if(currentValue - num === -1){
            answer += "w";
        }
        if(currentValue - num === 1){
            answer += "s";
        }
        if(currentValue - num === -10){
            answer += "d";
        }
        if(currentValue - num === 10){
            answer += "a";
        }
        currentValue = num;
    }
    return answer;
}