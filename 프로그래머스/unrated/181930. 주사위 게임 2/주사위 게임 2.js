function solution(a, b, c) {
    var answer = 0;
    var mySet = new Set([a, b, c]);
    var uniqueArr = [...mySet];
    
    if(uniqueArr.length === 3){
        answer = a + b + c;
    }
    if(uniqueArr.length === 2){
        answer = (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2))
    }
    if(uniqueArr.length === 1){
        answer = (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) * (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3))
    }
    return answer;
}