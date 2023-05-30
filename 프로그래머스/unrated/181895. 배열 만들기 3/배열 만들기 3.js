function solution(arr, intervals) {
    var answer = [];
    for(const val of intervals){
        answer.push(...arr.slice(val[0], val[1] + 1));
    }
    return answer;
}