function solution(array, n) {
    array = array.sort((a, b) => a - b);
    var diff = [];
    for(const num of array){
        diff.push(Math.abs(n - num));
    }
    var indexMin = diff.indexOf(Math.min(...diff));
    return array[indexMin];
}