function solution(keyinput, boardSize) {
    // 캐릭터의 초기 위치
    let x = 0, y = 0;
    
    // 방향키 입력에 따라 캐릭터의 위치를 업데이트
    keyinput.forEach(key => {
        if (key === 'up') {
            y += 1;
        } else if (key === 'down') {
            y -= 1;
        } else if (key === 'left') {
            x -= 1;
        } else if (key === 'right') {
            x += 1;
        }
        
        // 캐릭터가 맵 밖으로 나가지 않도록 제한
        x = Math.max(Math.min(x, Math.floor(boardSize[0] / 2)), -Math.floor(boardSize[0] / 2));
        y = Math.max(Math.min(y, Math.floor(boardSize[1] / 2)), -Math.floor(boardSize[1] / 2));
    });
    
    return [x, y];
}