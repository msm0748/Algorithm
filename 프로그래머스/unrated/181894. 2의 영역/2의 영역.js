function solution(arr) {
    var firstIndexOf = arr.indexOf(2);
    var lastIndexOf = arr.lastIndexOf(2);
    var answer = arr.slice(firstIndexOf, lastIndexOf + 1);
    if(answer.length === 0){
        return [-1]
    }
    return answer;
}