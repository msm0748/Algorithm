function solution(strArr) {
    var answer = strArr.filter((v) => !v.includes("ad"))
    return answer;
}