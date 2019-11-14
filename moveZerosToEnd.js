/* 
    Problem Description: Given an array A[] of n elements filled with several integers, some of them 
    being zeroes, you need to move all the zeroes to the end.
    Input :  [1, 8, 3, 0, 2, 0, 1, 10, 13, 0];
    Output : [1, 8, 3, 2, 1, 10, 13, 0, 0, 0];
*/
const moveZerosToEnd = (arr) => {
  let i = -1;
  for (let j = 0; j < arr.length; i++) {
    if (arr[i] != 0) {
      i++;
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }
  return arr;
};
