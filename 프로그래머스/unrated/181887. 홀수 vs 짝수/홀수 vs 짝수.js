function solution(num_list) {
    var odd = num_list.filter((num, i) => (i + 1) % 2 === 1);
    var even = num_list.filter((num, i) => (i + 1) % 2 === 0);
    
    function calculateSum(arr){
        return arr.reduce((acc, cur) => acc + cur);
    }
    
    odd = calculateSum(odd);
    even = calculateSum(even);
    
    return odd > even ? odd : even;
}