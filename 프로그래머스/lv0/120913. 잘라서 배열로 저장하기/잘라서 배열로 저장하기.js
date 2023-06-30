function solution(my_str, n) {
    var answer = [];
    for(let i = 1; i <= my_str.length; i += n){
            answer.push(my_str.slice(i, i + n));
    }
    return answer;
}


2
3
4
5
6
function solution(my_str, n) {
    let res = [];
    for (let i = 0; i < my_str.length; i+=n) res.push(my_str.slice(i, i+n));
    return res;
}
