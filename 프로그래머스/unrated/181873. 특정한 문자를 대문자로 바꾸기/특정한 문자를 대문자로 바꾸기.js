function solution(my_string, alp) {
    var answer = '';
    for(const val of my_string){
        if(val === alp){
            answer += val.toUpperCase()
        }else{
            answer += val
        }
    }
    return answer;
}