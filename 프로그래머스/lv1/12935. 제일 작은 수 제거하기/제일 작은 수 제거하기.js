function solution(arr) {
    var smallNum = Math.min(...arr);
    var answer = arr.filter(num => smallNum !== num)
    return answer.length ? answer : [-1];
}