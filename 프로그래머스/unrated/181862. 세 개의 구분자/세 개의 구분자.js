function solution(myStr) {
    var answer = [];
    var string = "";
    for(const str of myStr){
        if(str === "a" | str === "b" | str === "c"){
            // continu;
            answer.push(string);
            string = "";
        }else{
            string += str;
        }
    }
    answer.push(string);
    answer = answer.filter(v => v !== "")
    return answer.length > 0 ? answer : ["EMPTY"];
}