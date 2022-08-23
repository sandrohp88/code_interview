function rangeOfNumbers(startNum, endNum) {
  if (startNum >= endNum + 1) return [];
  const range = rangeOfNumbers(startNum, endNum - 1);
  range.push(endNum);
  return range;
}

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(5, 10));
console.log(rangeOfNumbers(10, 9));
console.log(rangeOfNumbers(10, 10));
