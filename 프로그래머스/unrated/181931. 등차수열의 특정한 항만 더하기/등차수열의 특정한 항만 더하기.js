function solution(a, d, included) {
    var answer = 0;
    var sum = a;
    for(const boolean of included){
        if(boolean){
            answer += sum;
        }
        sum += d;
    }
    return answer;
}