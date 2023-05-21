function solution(my_string) {
    var regex = /[^0-9]/g;
    var result = my_string.replace(regex, "");
    var answer = [...result].reduce((a, b) => Number(a) + Number(b));
    return answer;
}