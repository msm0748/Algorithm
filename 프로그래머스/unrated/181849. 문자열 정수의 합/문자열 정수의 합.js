function solution(num_str) {
    var answer = 0;
    for(const val of num_str){
        answer += Number(val)
    }
    return answer;
}