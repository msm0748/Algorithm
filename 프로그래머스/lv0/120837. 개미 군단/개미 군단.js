function solution(hp) {
    var answer = 0;
    while(hp !== 0){
        if(hp / 5 >= 1){
            answer += parseInt(hp / 5);
            hp = hp - parseInt(hp / 5) * 5;
        }else if(hp / 3 >= 1){
            answer += parseInt(hp / 3);
            hp = hp - parseInt(hp / 3) * 3;
        }else if(hp / 1 >= 1){
            answer += parseInt(hp / 1);
            hp = hp - parseInt(hp / 1) * 1;
        }
    }
    return answer;
}