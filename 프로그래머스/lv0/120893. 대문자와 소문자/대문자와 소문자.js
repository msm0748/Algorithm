function solution(my_string) {
    var answer = '';
    for(const str of my_string){
        if(str === str.toUpperCase()){
            answer += str.toLowerCase()
        }else{
            answer += str.toUpperCase()
        }
    }
    return answer;
}