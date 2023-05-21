function solution(my_string) {
    var answer = 0;
    var arr = my_string.match(/\d+/g);
    if(arr){
            for(const num of arr){
        answer += Number(num)
    }
    }
    return answer;
}