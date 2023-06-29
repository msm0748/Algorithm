function solution(my_string) {
    var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var answer = [...abc].map(v => 0);
    for(const string of my_string){
        const index = abc.indexOf(string)
        answer[index] += 1;
    }
    return answer;
}