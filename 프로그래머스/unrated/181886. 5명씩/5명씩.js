function solution(names) {
    var answer = [];
    var n = parseInt(names.length / 5);
    for(let i = 0; i <= n; i++){
        if(names[i * 5]){
            answer.push(names[i * 5])
        }

    }
    return answer;
}