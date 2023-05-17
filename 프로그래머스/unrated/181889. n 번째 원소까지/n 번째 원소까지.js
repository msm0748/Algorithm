function solution(num_list, n) {
    return num_list.filter((v, i) => {
        if(i < n)
            return v
    });
}