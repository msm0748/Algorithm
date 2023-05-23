function solution(num_list) {
    var odd = num_list.filter((num, i) => (i + 1) % 2 === 1);
    var even = num_list.filter((num, i) => (i + 1) % 2 === 0);
    
    odd = odd.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0);
    even = even.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0);
    
    return odd > even ? odd : even;
}