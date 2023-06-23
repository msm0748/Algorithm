function solution(arr, queries) {
    var answer = [];
    for(const query of queries){
        const start = query[0];
        const end = query[1];
        const num = query[2];
        const result = arr.slice(start, end + 1).sort((a, b) => a - b).find(n => n > num);
        answer.push(result ? result : -1);
    }
    return answer;
}