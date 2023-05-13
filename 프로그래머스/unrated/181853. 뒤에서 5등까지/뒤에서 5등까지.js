function solution(num_list) {
    var arr = num_list;

    arr.sort(function(a, b)  {
      return a - b;
    });
    arr = arr.slice(0, 5)
    return arr;
}