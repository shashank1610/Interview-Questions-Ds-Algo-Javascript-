/*
Given an unsorted array of nonnegative integers, 
find a continuous subarray which adds to a given number.
Input : [1, 4, 20, 3, 10, 5] , sum = 33
Ouptut: Sum found between indexes 2 and 4
*/

const subArrayWithSum = (arr, sum) => {
  let currSum = arr[0];
  let start = 0;
  for (let i = 1; i <= arr.length; i++) {
    while (currSum > sum && start < i - 1) {
      currSum = currSum - arr[start];
      start++;
    }
    if (currSum == sum) {
      console.log(`Sum found between ${start} and ${i - 1}`);
    }
    currSum = currSum + arr[i];
  }

  return false;
};

subArrayWithSum([1, 4, 0, 0, 3, 10, 5], 7);
