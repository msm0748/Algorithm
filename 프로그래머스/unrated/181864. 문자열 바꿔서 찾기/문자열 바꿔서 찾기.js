function solution(myString, pat) {
    var answer = 0;
    for(const string of myString){
        if(string === "A"){
            answer += "B"
        }else{
            answer += "A"
        }
    }
    return answer.includes(pat) ? 1 : 0;
}