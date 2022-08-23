function countdown(n) {
  if (n < 1) return [];
  const countArray = countdown(n - 1);
  countArray.push(n);
  return countArray;
}

console.log(countdown(10));
console.log(countdown(-1));
console.log(countdown(5));
