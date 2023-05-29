function solution(my_str, n) {
    var answer = [];
    var str = "";
    for(let i = 1; i <= my_str.length; i++){
        str += my_str[i - 1]
        if(i === my_str.length){
            console.log("asdf")
            answer.push(str)
        }else if(i % n === 0){
            answer.push(str)
            str = "";
        }
    }
    return answer;
}