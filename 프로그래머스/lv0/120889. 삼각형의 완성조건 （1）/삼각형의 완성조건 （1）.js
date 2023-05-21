function solution(sides) {
    var answer = sides.sort((a, b) => a - b);
    if(answer[0] + answer[1] <= answer[2]){
        answer = 2;
    }else{
        answer = 1;
    }
    return answer;
}