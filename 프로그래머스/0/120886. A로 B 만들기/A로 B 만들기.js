function solution(before, after) {
    var answer = before;
    for(let i = 0; i < before.length; i++){
        answer = answer.replace(after[i], '')
    };
    return answer.length === 0 ? 1 : 0;
}