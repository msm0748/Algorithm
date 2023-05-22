function solution(my_string, n) {
    var answer = '';
    for(const str of my_string){
        for(let j = 0; j < n; j++){
            answer += str;
        }
    }
    return answer;
}