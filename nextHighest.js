/*
Given an array A[] of size n, you need to find the next greater element for each element
 in the array. Return an array that consists of the next greater element of A[i] at index i.
 Input :  [1, 2, 3, 4, 5];
 Output : [2, 3, 4, 5, -1]
*/

//o(n^2)

const nextHighest = arr => {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    let isGreater = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        isGreater = true;
        ans.push(arr[j]);
        break;
      }
    }
    if (isGreater == false) {
      ans.push(-1);
    }
  }
  return ans;
};

// using stacks
const nextHighest = arr => {
  let ans = [];
  let stack = [];
  ans = arr.map(() => {
    return -1;
  });
  stack.push(0);
  for (let i = 1; i < arr.length; i++) {
    while (stack.length > 0 && arr[stack[0]] < arr[i]) {
      ans[stack[0]] = arr[i];
      stack.shift();
    }
    stack.push(i);
  }
  return ans;
};
