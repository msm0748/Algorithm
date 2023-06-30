function solution(myString) {
    var answer = '';
    for(const str of myString){
        if(str > 'l'){
            answer += str;
        }else{
            answer += "l"
        }
    }
    return answer;
}