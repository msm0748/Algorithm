function solution(array) {
    var answer = 0;
    array = array.join("");
    for(const val of array){
        if(val === "7"){
            answer++;
        }
    }
    return answer;
}