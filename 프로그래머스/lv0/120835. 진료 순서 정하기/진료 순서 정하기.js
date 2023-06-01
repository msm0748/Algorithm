function solution(emergency) {
    var answer = [];
    var sort = [...emergency].sort((a, b) => b - a);
    for(const val of emergency){
        answer.push(sort.indexOf(val) + 1);
    }
    return answer;
}