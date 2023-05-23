function solution(money) {
    var answer = [];
    money = Number(money);
    answer.push(parseInt(money / 5500));
    answer.push(money % 5500)
    return answer;
}