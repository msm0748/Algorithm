function solution(num_list) {
    var result = 0;
    for(const num of num_list){
        var answer = num;
        while(answer !== 1){
            if(answer % 2 === 0){
                answer = answer / 2;
            }else{
                answer = (answer - 1) / 2
            }
            result++;
        }
    }
    return result;
}