function solution(cipher, code) {
    var answer = [...cipher].filter((v, i) => (i + 1) % code === 0);
    return answer.join('');
}