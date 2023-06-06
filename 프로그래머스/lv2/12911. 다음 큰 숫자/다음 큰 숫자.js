function solution(n) {
    var answer = n + 1;
    var currentCount = n.toString(2).split('1').length - 1;

    while(answer.toString(2).split('1').length - 1 !== currentCount){
        answer++;
    };
    return answer;
}