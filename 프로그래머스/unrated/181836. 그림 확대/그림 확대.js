function solution(picture, k) {
    var answer = [];
    for(const arr of picture){
        var scale = ""
        for(const str of arr){
            scale += str.repeat(k);
        }
        for(let i = 0; i < k; i++){
            answer.push(scale);            
        }
    }
    return answer;
}