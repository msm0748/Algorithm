function solution(num_list, n) {
    var answer = [];
    var arr = []
    for(let i = 1; i <= num_list.length; i++){
        if(i % n !== 0){
            arr.push(num_list[i - 1]);
        }else{
            arr.push(num_list[i - 1]);
            answer.push(arr);
            arr = [];
        }
    }
    return answer;
}