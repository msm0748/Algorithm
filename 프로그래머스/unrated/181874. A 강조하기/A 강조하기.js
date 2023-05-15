function solution(myString) {
    var answer = '';
    for(const val of myString){
        if(val === "a" || val === "A"){
            answer += val.toUpperCase()
        }else{
            answer += val.toLowerCase()
        }
    }
    return answer;
}