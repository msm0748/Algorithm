function solution(age) {
    var answer = '';
    var abc = "abcdefghijklmnopqrwstuvwxyz";
    for(const val of age.toString()){
        answer += abc[val]
    }
    
    return answer;
}