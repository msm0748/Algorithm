function solution(a, b) {
    var num1 = Number(String(a) + String(b));
    var num2 = 2 * a * b;
    return num1 > num2 ? num1 : num2;
}