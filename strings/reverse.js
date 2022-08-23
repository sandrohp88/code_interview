function reverse(str) {
//   let start = 0;
//   let end = str.length - 1;
//   const reversedArr = [];

//   while (start <= end) {
//     reversedArr[start] = str[end];
//     reversedArr[end] = str[start];
//     start++;
//     end--;
//   }
  
  return str.split('').reverse().join('');
}

console.log(reverse("hello"));
console.log(reverse(""));
console.log(reverse("hi"));
console.log(reverse("sandro"));
