function solution(arr1, arr2) {
    var arrSum1 = arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    var arrSum2 = arr2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    if(arr1.length !== arr2.length){
        return arr1.length > arr2.length ? 1 : -1;
    }else{
        if(arrSum1 === arrSum2){
            return 0;
        }else{
            return arrSum1 > arrSum2 ? 1 : -1;
        }
    }
}