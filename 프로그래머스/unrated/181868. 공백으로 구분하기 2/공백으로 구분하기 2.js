function solution(my_string) {
    var re = /\s*(?: |$)\s*/;
    var answer = my_string.split(re).filter(v => v !== "");
    return answer;
}