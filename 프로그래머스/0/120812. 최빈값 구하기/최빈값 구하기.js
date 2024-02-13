function solution(array) {
    // 각 숫자의 등장 횟수를 저장하는 객체 생성
    const counts = {};
    
    // 배열을 순회하면서 등장 횟수 카운트
    array.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });
    
    // 가장 많이 등장한 횟수
    const maxCount = Math.max(...Object.values(counts));
    
    // 가장 많이 등장한 횟수를 가진 숫자들
    const modes = Object.keys(counts).filter(num => counts[num] === maxCount);
    
    // 최빈값이 하나 이상이면 -1 반환, 아니면 최빈값 반환
    return modes.length > 1 ? -1 : parseInt(modes[0]);
}