/*
You are given an array A[] consisting of n elements. You need to find and return the number
 which appears more than n/2 times.
Input : [3,9,1,3,5,3,3]
Output : 3
*/

// brute force

const majorityElement = arr => {
  let count;
  let index;
  for (let i = 0; i < arr.length; i++) {
    count = 1;
    index = i;
    flag = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
        if (count >= arr.length / 2) {
          flag = true;
          break;
        }
      }
    }
    if (flag) {
      break;
    }
  }
  return arr[index];
};

//auxliary object having count

const majorityElement = arr => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
      map[arr[i]] == undefined ? map[arr[i]] = 1 : map[arr[i]] += 1;
  }
  for(let key in map){
      if(map[key] >= arr.length/2){
          return key;
      }
  }
};
