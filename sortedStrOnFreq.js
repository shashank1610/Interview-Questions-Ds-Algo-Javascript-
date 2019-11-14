/*
Problem Description: You are given a string S and its length n and you need to sort its 
characters based on their frequency. The characters in the output will be ordered based 
on their frequency in S, characters with higher frequency come first.
for eg. 
Input: S = "halalelluejah"
Output: llllaaahheeuj
*/

const sortStringOnFreq = (str) =>{
let sortedStr = "";
count = {};
for (let key in str) {
  if (count[str[key]] == undefined) {
    count[str[key]] = 1;
  } else {
    count[str[key]] += 1;
  }
}
let sortedArr = Object.keys(count).sort((a, b) => {
  return count[b] - count[a];
});
for (let val of sortedArr) {
  sortedStr += val.repeat(count[val]);
}
return sortedStr
}

