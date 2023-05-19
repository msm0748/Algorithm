function solution(my_string, num1, num2) {
    var answer = [...my_string];
    var str1 = my_string[num1];
    var str2 = my_string[num2];
    answer.splice(num1, 1, str2);
    answer.splice(num2, 1, str1);
    return answer.join("");
}