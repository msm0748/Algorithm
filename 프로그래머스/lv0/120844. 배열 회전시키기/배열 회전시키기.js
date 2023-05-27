function solution(numbers, direction) {
    var answer = numbers;
    if(direction === "right"){
        var first = answer[answer.length - 1];
        answer.pop();
        answer.unshift(first)
    }else{
        var last = answer[0];
        answer.shift();
        answer.push(last)
    }
    return answer;
}