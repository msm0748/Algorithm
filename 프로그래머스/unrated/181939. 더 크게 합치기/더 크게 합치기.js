function solution(a, b) {
    const stringA = a.toString();
    const stringB = b.toString();
    if(stringA + stringB > stringB + stringA){
        return Number(stringA + stringB);
    }
    return Number(stringB + stringA);
}