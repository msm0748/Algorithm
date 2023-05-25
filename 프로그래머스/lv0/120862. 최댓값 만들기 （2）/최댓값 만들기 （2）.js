function solution(numbers) {
    var answer = numbers.sort((a, b) => a - b);
    var big = answer[answer.length - 1] * answer[answer.length - 2];
    var small = answer[0] * answer[1];
    return big > small ? big : small ;
}