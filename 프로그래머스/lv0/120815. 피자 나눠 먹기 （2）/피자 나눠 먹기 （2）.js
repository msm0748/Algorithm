function solution(n) {
    var answer = 1;
    var pizza = 6;
    while(pizza % n !== 0){
        answer++;
        pizza += 6;
    }
    return answer;
}