function solution(n) {
    var answer = n.toString(3).split("");
    answer = answer.reverse().join("");
    return parseInt(answer, 3);
}