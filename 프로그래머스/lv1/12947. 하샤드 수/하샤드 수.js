function solution(x) {
    var answer = 0;
    for(const num of x.toString()){
        answer += Number(num)
    }
    return x % answer === 0 ? true : false;
}