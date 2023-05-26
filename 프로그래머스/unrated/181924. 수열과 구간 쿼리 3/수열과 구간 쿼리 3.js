function solution(arr, queries) {
    function changeValue(arr, index1, index2) {
      [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }
    for(const changeIndex of queries){
        changeValue(arr, changeIndex[0], changeIndex[1]);
    }
    return arr;
}