/*
Problem Description: Given an array A[] of size n, find the most frequent element in the array, 
i.e. the element which occurs the most number of times. 
It is assured that at least one element is repeated.
Input:  [3, 9, 1, 3, 6, 3, 8, 1, 6]
Output: 3
*/

const mostFreqElement = arr => {
  count = {};
  let mostFrequent;
  let maxCount;
  for (let key in arr) {
    if (count[arr[key]] == undefined) {
      count[arr[key]] = 1;
    } else {
      count[arr[key]] += 1;
    }
  }

  for(let [num,numCount] of Object.entries(count)) {
      if(maxCount ==  undefined || maxCount < numCount){
          maxCount = numCount;
          mostFrequent = num;
      }
  }
  return mostFrequent;
};

