function solution(intStrs, k, s, l) {
    var answer = [];
    for(const val of intStrs){
        if(Number(val.substr(s, l)) > k){
            answer.push(Number(val.substr(s, l)))
        }
    }
    return answer;
}