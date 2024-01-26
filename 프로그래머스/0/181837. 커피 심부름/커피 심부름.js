function solution(order) {
    var answer = 0;
    order.forEach(val => {
        switch(val) {
            case 'iceamericano':
            case 'americanoice':
            case 'hotamericano':
            case 'americanohot':
            case 'anything':
            case 'americano':
                answer += 4500;
                break;
            default:
                answer += 5000;
                break;
        }
        
    })
    return answer;
}