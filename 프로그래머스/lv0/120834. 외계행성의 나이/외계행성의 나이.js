function solution(age) {
    var answer = '';
    var abc = "abcdefghij";
    for(const val of age.toString()){
        answer += abc[val]
    }
    
    return answer;
}