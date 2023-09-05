const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const nextPermutation = (arr) => {
  let i = arr.length - 1;
  while (i > 0 && arr[i - 1] >= arr[i]) i--;

  if (i <= 0) return false;

  let j = arr.length - 1;
  while (arr[j] <= arr[i - 1]) j--;

  [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];

  j = arr.length - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }

  return true;
};

const arr = input.split('');
if (nextPermutation(arr)) {
  console.log(arr.join(''));
} else {
  console.log(0);
}