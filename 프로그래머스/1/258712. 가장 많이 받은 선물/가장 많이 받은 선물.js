function solution(friends, gifts) {
    let answer = 0; // 정답
    let dstData = {}; // 파싱될 데이터 초기화
    // dstData 초기화
    friends.forEach(outerName => {
        dstData[outerName] = {}
        friends.forEach(innerName => {
            if(outerName !== innerName) { // 이름이 같지 않을 경우 [준 개수 = 0, 받은 개수 = 0] 으로 초기화
                dstData[outerName][innerName] = [
                  0, // 준 개수 
                  0 // 받은 개수
                ]
            }
            // 이름이 같은 경우 선물 지수 0으로 초기화
            else {
                dstData[outerName][innerName] = 0
            }
        })
    })
    // dstData 파싱
    gifts.forEach(gift => {
        [
          from, // 선물을 준 사람
          to // 선물을 받은 사람
        ] = gift.split(' ')
        dstData[from][from] += 1 // 선물을 준 사람의 선물 지수 증감
        dstData[to][to] -= 1 // 선물을 받은 사람의 선물 지수 감소
        // 선물 계수 계산
        dstData[from][to][0] += 1
        dstData[to][from][1] += 1
    })
    Object.entries(dstData).forEach(([name, giftDatas], index) => {
        tempAnswer = 0; // 임시 정답 데이터
        Object.entries(giftDatas).forEach(([toName, giftData], index) => {
            // 받은 사람과 준 사람의 이름이 다른 경우
            if(name !== toName) {
                const [
                  give, // 선물 준 사람 
                  receive // 선물 받은 사람
                ] = [...giftData]
                // 선물 준 사람의 갯수가 더 많을 경우
                if(give > receive) {
                    // 정답 증가
                    tempAnswer += 1
                }
                // 선물 준 사람과 받은 사람의 갯수가 같을 경우
                else if(give === receive) {
                    // 선물 지수 비교
                    // 준 사람의 선물 지수가 큰 경우에만 정답 증가
                    if(dstData[name][name] > dstData[toName][toName]) {
                        tempAnswer += 1
                    }
                }
            }
        })
        // 정답 갱신
        answer = Math.max(answer, tempAnswer)
    })
    return answer;
}