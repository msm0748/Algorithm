function solution(myString) {
    var answer = myString.split('x').sort();
    
    return answer.filter(v => v !== '');
}