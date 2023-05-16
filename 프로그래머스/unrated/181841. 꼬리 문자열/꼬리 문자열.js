function solution(str_list, ex) {
    var answer = '';
    for(const value of str_list){
        if(!value.includes(ex)){
            answer += value
        }
    }
    return answer;
}