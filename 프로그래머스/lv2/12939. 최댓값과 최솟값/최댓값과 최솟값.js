function solution(s) {
    var answer = '';
    s = s.split(" ").map(v => Number(v));
    var max = Math.max(...s);
    var min = Math.min(...s);
    answer += min.toString();
    answer += " " + max.toString();
    return answer;
}