function solution(arr, divisor) {
    var answer = [];
    for(const num of arr){
        if(num % divisor === 0){
            answer.push(num);
        }
    }
    answer.sort(function(a, b){
        return a - b;
    })
    return answer.length > 0 ? answer : [-1];
}