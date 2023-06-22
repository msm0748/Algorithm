function solution(ineq, eq, n, m) {
    var answer = 0;
    return eval(`${n} ${ineq}${eq === "=" ? "=" :""} ${m}`) ? 1 : 0;
}