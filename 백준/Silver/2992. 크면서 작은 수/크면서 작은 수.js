const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const permutation = (permu, rests, output) => {
  if (rests.length == 0) {
    output.push(permu.join('')); // 1차원 배열로 조인하여 결과에 추가
    return;
  }
  rests.forEach((v, idx) => {
    const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
    permutation([...permu, v], rest, output);
  });
};

const output = [];
const arr = input.split('');
permutation([], arr, output);

const result = output.sort((a, b) => a - b).find((num) => input < num);

console.log(result ? result : 0); // 1차원 배열 출력
