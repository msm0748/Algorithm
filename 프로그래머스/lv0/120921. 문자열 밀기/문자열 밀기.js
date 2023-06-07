function solution(A, B) {
    var answer = 0;
    var strArr = [...A];
    var arr = [];
    for(let i = 0; i < A.length; i++){
        if(strArr.join("") === B){
            console.log("sadf")
            return i;
        }
        var pop = strArr.pop();
        strArr.unshift(pop);
    }
    return -1;
}