function solution(n) {
    var answer = [...n.toString()].reverse();
    return answer.map(num => Number(num));
}