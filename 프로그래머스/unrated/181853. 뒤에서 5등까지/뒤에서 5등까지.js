function solution(num_list) {
    var arr = num_list.sort((a, b) => a - b);
    arr = arr.slice(0, 5)
    return arr;
}