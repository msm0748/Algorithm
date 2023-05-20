function solution(arr, k) {
    var answer = arr.map((num) => k % 2 === 1 ? num * k : num + k);
    
    return answer;
}