function solution(my_string) {
    var regex = /[^0-9]/g;
    var result = my_string.replace(regex, "");
    var answer = [...result].sort((a, b) => a - b);
    return answer.map((v) => Number(v));
}