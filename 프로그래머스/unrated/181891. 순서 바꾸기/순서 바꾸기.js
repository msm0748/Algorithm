function solution(num_list, n) {
    var first = num_list.slice(n)
    var last = num_list.slice(0, n);
    var answer = [...first, ...last];
    
    return answer;
}