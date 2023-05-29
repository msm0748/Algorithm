function solution(my_string) {
    var answer = [];
    var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for(const val of abc){
        answer.push(0);
    }
    for(const string of my_string){
        const index = abc.indexOf(string)
        answer[index] += 1;
    }
    return answer;
}