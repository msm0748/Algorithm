function solution(s) {
    var answer = [];
    var arr = s.split(" ");
    for(const str of arr){
        var string = "";
        for(let i = 0; i < str.length; i++){
            if(i % 2 === 0){
                string += str[i].toUpperCase();
            }else{
                string += str[i].toLowerCase();
            }
        }
        answer.push(string);
    }
    return answer.join(" ");
}