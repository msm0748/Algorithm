function solution(a, b, n) {
    let newCoke = Math.floor(n / a) * b;
    if(n > a){
        return newCoke + solution(a, b, newCoke + (n % a));
    }
    return newCoke;
}
