// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
const input = require("fs").readFileSync("/dev/stdin").toString();
const score = Number(input);
if(input > 89){
    console.log("A");
}else if(input > 79){
    console.log("B");
}else if(input > 69){
    console.log("C");
}else if(input > 59){
    console.log("D");
}else{
    console.log("F");
}