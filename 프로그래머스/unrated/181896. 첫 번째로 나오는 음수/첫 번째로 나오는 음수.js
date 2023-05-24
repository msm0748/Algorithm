function solution(num_list) {
    var answer = 0;
    for(const num of num_list){
        if(num < 0){
            return answer;
        }
        answer++;
        
    }
    return -1;
}