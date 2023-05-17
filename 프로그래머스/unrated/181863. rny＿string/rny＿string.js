function solution(rny_string) {
    var answer = '';
    for(const val of rny_string){
        if(val === "m"){
            answer += "rn"
        }else{
            answer += val
        }
    }
    return answer;
}