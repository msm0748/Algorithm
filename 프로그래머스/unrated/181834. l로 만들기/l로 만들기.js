function solution(myString) {
    var answer = '';
    for(let i = 0; i < myString.length; i++){
        // l의 유니코드는 108
        if(myString.charCodeAt(i) > 108){
            answer += myString[i]
        }else{
            answer += "l"
        }
    }
    return answer;
}