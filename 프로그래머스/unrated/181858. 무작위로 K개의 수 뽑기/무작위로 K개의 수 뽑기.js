function solution(arr, k) {
    var answer = [];
    var set = new Set(arr);
    arr = [...set].map(n => n.toString());
    for(let i = 0; i < k; i++){
        if(arr[i]){
            answer.push(arr[i]);
        }else{
            answer.push(-1);
        }
    }
    return answer.map(Number);
}