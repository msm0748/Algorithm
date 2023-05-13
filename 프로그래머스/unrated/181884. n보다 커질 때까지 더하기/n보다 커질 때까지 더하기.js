function solution(numbers, n) {
    var answer = 0;
    for(const value of numbers){
        if(answer <= n){
            answer += value
        }
    }
    return answer;
}