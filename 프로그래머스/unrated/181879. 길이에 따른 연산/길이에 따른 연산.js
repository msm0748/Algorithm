function solution(num_list) {
    var answer = 0;
    if(num_list.length > 10){
       for(let val of num_list){
            answer += val
        } 
    }else{
        answer = 1;
        for(let val of num_list){
            answer *= val
        } 
    }
    
    return answer;
}