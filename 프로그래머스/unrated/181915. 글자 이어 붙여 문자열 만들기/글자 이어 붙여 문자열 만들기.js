function solution(my_string, index_list) {
    var answer = '';
    for (let value of index_list) {
        answer += my_string[value]
    }
    return answer;
}