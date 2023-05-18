function solution(s1, s2) {
    const arr = [...s1, ...s2]
    const set = new Set(arr);
    const uniqueArr = [...set];
    return arr.length - uniqueArr.length;
}