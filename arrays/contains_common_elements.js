// Given two arrays, create a function that let's the use know
// (true/false) whether these two arrays contain any common items
// For example:
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];
// Should return false
// --------------------
const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "y", "x"];
// Should return true

function findCommonItems(array1, array2) {
//   // brute force O(n*m) -> O(n^2)
//   for( const ele1 of array1){
//     for(const ele2 of array2)
//     if(ele1 === ele2) return true
//   }


// Using a hash map to store elements and look it up later
// O(n+m) -> O(n)
  let seen = new Set()
  array1.forEach(ele => seen.add(ele))

  for( const item of array2){
    if(seen.has(item)) return true
  }
  return false;
}

console.log(findCommonItems(array1, array2));
console.log(findCommonItems(array3, array4));
