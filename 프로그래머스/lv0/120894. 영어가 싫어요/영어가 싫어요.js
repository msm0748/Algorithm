function solution(numbers) {
    var answer = numbers;
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(let i = 0; i < arr.length; i++){
        answer = answer.replaceAll(arr[i], i)
    }
    return Number(answer);
}