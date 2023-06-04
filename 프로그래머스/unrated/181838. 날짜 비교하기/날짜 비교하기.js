function solution(date1, date2) {
    var answer = 0;
    date1 = new Date(date1);
    date2 = new Date(date2);
    return date1 < date2 ? 1 : 0;
}