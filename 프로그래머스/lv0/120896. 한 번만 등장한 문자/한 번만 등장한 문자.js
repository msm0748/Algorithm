function solution(s) {
    var answer = [];
    for(const str of s){
        const regex = new RegExp(`[${str}]`, 'g');
        if(s.match(regex).length === 1){
            answer.push(str);
        }
    }
    return answer.sort().join("");
}