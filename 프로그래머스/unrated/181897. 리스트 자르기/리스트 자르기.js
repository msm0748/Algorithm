function solution(n, slicer, num_list) {
    var answer = [];
    const [a, b, c] = slicer;
    if(n === 1){
        answer = num_list.slice(0, b + 1);
    }
    if(n === 2){
        answer = num_list.slice(a);
    }
    if(n === 3){
        answer = num_list.slice(a, b + 1);
    }
    if(n === 4){
        answer = num_list.slice(a, b + 1).filter((v, i) => i % c !== 1);
    }
    return answer;
}