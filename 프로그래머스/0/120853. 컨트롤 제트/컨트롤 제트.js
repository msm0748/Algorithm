function solution(s) {
    var answer = 0;
    // var beforeNum = 0;
    var arr = s.split(" ");
    console.log(arr)
    arr.forEach((n, i) => {
        if(n === "Z"){
            answer -= Number(arr[i - 1]);
        }else{
            answer += Number(n);
        }
    })
    
    return answer;
}