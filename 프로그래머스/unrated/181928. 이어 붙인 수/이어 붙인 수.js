function solution(num_list) {
    var even = "";
    var odd = "";
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0){
            even += String(num_list[i])
        }else{
            odd += String(num_list[i])
        }
    }
    return Number(even) + Number(odd);
}