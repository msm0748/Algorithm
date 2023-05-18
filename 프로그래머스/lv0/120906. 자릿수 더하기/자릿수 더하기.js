function solution(n) {
    var result = 0;
    for(const val of String(n)){
        result += Number(val)
    }
    return result;
}