function solution(arr) {
    var answer = [];
    for(const val of arr){
        for(let i = 0; i < val; i++){
            answer.push(val)
        }
    }
    return answer;
}