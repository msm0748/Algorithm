function solution(myString, pat) {
    var answer = '';
    var index = myString.lastIndexOf(pat);
    answer = myString.slice(0, index + pat.length);
    return answer;
}