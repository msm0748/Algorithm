function solution(num_list) {
    let product = 1;
    let sum = 0;
    for(let i = 0; i < num_list.length; i++){
        product *= num_list[i];
        sum += num_list[i];
    }
    
    return product > Math.pow(sum, 2) ? 0 : 1;
}