function solution(array, n) {
    const result = array.filter(item => item === n);
    return result.length;
}