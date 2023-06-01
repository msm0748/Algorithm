function solution(a, d, included) {
    var answer = 0;
    var sum = a;
    for(const val of included){
        if(val === true){
            answer += sum;
        }
        sum += d;
    }
    return answer;
}