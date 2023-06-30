function solution(rny_string) {
    var answer = [...rny_string].map(v => v === "m" ? "rn" : v);
    return answer.join("");
}