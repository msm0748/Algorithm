function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++){
        var arr = [];
        for(let j = 1; j <= i; j++){
            if(i % j === 0){
                arr.push(j)
                if(arr.length > 2){
                    answer++;
                    break;
                }
            }
        }
    }
    return answer;
}