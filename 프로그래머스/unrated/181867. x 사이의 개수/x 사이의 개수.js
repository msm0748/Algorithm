function solution(myString) {
    var answer = myString.split("x");
    var result = [];
    for(const val of answer){
        result.push(val.length)
    }
    return result;
}