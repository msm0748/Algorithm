function solution(num_str) {
    var answer = [...num_str].map(Number).reduce((acc, cur) => acc + cur, 0);
    return answer;
}