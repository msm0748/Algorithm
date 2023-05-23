function solution(array) {
    var answer = array.sort((a, b) => a - b);
    return answer[parseInt(array.length / 2)];
}