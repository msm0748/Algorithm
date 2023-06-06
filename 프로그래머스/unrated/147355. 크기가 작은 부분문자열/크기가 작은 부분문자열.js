function solution(t, p) {
    var arr = [];
    for(let i = 0; i < t.length; i++){
        arr.push(t.slice(i, p.length + i));
    }
    arr = arr.filter(v => v.length === p.length && v <= p);
    return arr.length;
}