function solution(numbers) {
    var answer = (numbers.reduce((previousValue, currentValue) => previousValue + currentValue)) / numbers.length;
    return answer;
}