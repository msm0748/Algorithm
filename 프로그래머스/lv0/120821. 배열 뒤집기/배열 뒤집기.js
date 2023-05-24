function solution(num_list) {
    var answer = num_list.map((v, i) => num_list[num_list.length - 1 - i]);
    
    return answer;
}