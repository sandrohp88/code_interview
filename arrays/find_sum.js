// Find if two elements in an array add to a given sum
const array1 = [1, 2, 3, 9];
const sum = 8;
const array2 = [1, 2, 4, 4];
const array3 = [];
function findSumPair(array, sum) {
  // brute force solution O(n^2)
  //   for (let i = 0; i < array.length; i++) {
  //     for (let j = i + 1; j < array.length; j++) {
  //       const currentSum = array[i] + array[j];
  //       if (currentSum === sum) return true;
  //     }
  //   }

  // sorted array O(nlogn)
  //   array.sort();
  //   let low = 0;
  //   let high = array.length - 1;
  //   while (low < high) {
  //     currentSum = array[low] + array[high];
  //     if (currentSum === sum) return true;

  //     if (currentSum < sum) {
  //       low++;
  //     } else {
  //       high--;
  //     }
  //   }

  // using DP, storing sum complement O(n) time complexity O(n) space complexity

  const seen = new Set();
  for (const element of array) {
    const complement = sum - element;
    // if I've already seen the seen I can return true
    if (seen.has(complement)) return true;
    seen.add(complement);
  }
  return false;
}

console.log(findSumPair(array1, sum));
console.log(findSumPair(array2, sum));
console.log(findSumPair(array3, sum));
