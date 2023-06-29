function solution(intStrs, k, s, l) {
    var answer = [];
    for(const val of intStrs){
        intStrs = Number(val.substr(s, l));
        if(intStrs > k){
            answer.push(intStrs)
        }
    }
    return answer;
}