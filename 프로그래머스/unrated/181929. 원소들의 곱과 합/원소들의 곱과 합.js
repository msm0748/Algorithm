function solution(num_list) {
    var num1 = 1;
    var num2 = 0;
    for(let i = 0; i < num_list.length; i++){
        num1 *= num_list[i]
    }
    for(let i = 0; i < num_list.length; i++){
        num2 += num_list[i]
    }
    
    return num1 > Math.pow(num2, 2) ? 0 : 1;
}