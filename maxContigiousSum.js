/*
You are given an array A[] consisting of n elements. You need to find contigious subsequence for which
the sum off elements is maximum.
Input : [1,-3,4,-2,-1,6]
Output : 7
*/

const maxContigiousSum = arr => {
  let maxSum = 0;
  let maxTillNow = [];
  arr[0] > 0 ? (maxTillNow[0] = arr[0]) : (maxTillNow[0] = 0);
  for (let i = 1; i < arr.length; i++) {
    if (maxTillNow[i - 1] + arr[i] > 0) {
      maxTillNow[i] = maxTillNow[i - 1] + arr[i];
    } else {
      maxTillNow[i] = 0;
    }
  }
  for(let j = 0 ; j< maxTillNow.length ; j++){
      if(maxSum < maxTillNow[j]){
          maxSum = maxTillNow[j]
      }
  }
  return maxSum
};

