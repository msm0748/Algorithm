function solution(my_string, is_suffix) {
    var answer = my_string.slice(-is_suffix.length, my_string.length);
    return answer === is_suffix ? 1 : 0;
}