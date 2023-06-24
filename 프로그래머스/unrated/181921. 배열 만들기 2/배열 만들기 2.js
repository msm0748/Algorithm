function solution(l, r) {
    var answer = [];
    for(let i = l; i <= r; i++){
        const num = i.toString();
        if (!num.match(/[^50]+/)) answer.push(num)
    }
    return answer.length > 0 ? answer.map(Number) : [-1];
}