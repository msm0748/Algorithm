function solution(s) {
  let answer = false;
  let num = "0123456789";
  if (s.length === 4 || s.length === 6) {
    for (i = 0; i < s.length; i++) {
      if (num.includes(s[i])) {
        answer = true;
      } else {
        answer = false;
        break;
      }
    }
  }
  return answer;
}