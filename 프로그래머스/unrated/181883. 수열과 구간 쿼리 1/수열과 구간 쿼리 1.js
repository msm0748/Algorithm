function solution(arr, queries) {
    var answer = arr;
    for(const query of queries){
        const s = query[0];
        const e = query[1];
        for(let i = s; i <= e; i++){
            answer[i] += 1;
        }
    }
    return answer;
}