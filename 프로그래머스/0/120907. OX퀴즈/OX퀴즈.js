function solution(quiz) {
    var answer = [];
    quiz.forEach(val => {
        val = val.replace('=', '===')
        eval(val) ? answer.push('O') : answer.push('X');
    })
    return answer;
}