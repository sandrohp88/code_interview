function mergeSortedArrays(arr1, arr2) {
  let mergedArr = [];
  let arr1Index = 0;
  let arr2Index = 0;
  const arr1Length = arr1.length - 1;
  const arr2Length = arr2.length - 1;

  while (arr1Index <= arr1Length && arr2Index <= arr2Length) {
    const currentArr1Value = arr1[arr1Index];
    const currentArr2Value = arr2[arr2Index];
    if (currentArr1Value === currentArr2Value) {
      mergedArr.push(currentArr1Value);
      mergedArr.push(currentArr2Value);
      arr1Index++;
      arr2Index++;
    } else if (currentArr1Value < currentArr2Value) {
      mergedArr.push(currentArr1Value);
      arr1Index++;
    } else {
      mergedArr.push(currentArr2Value);
      arr2Index++;
    }
  }
  if (arr1Index < arr1Length) {
    for (let i = arr1Index; i <= arr1Length; i++) {
      mergedArr.push(arr1[i]);
    }
  }
  if (arr2Index < arr2Length) {
    for (let i = arr2Index; i <= arr2Length; i++) {
      mergedArr.push(arr2[i]);
    }
  }
  return mergedArr;
}

console.log(mergeSortedArrays([1, 2, 3, 4, 4, 5], [3, 4, 5, 5, 6])); 
console.log(mergeSortedArrays([1, 2, 3, 4, 4, 5], [])); 
//[1,2,3,3,4,4,4,5,5,5,6]
console.log(mergeSortedArrays([1, 2, 30, 53, 60, 75], [3, 4, 5, 8, 16]));
//[1,2,3,4,5,8,16,30,53,60,75]