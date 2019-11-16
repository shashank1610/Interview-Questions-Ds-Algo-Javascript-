/*
You are given sentence  You need to Break the sentence into chunks of n char limit.
Input : " India won the match by 6 runs against England."
Output : [India won the (0/4)]
        [match by 6 (1/4)] and so on.
*/

const majorityElement = (sentence, n) => {
  let wordArr = sentence.split(" ");
  let resultArr = [];
  let index = 0;
  let wordCount = n;
  for (let key in wordArr) {
    if (wordArr[key].length < wordCount) {
      if (resultArr[index] == undefined) {
        resultArr[index] = wordArr[key] + " ";
      } else {
        resultArr[index] += wordArr[key] + " ";
      }
      wordCount -= wordArr[key].length + 1;
    } else {
      index++;
      wordCount = n;
      resultArr[index] = wordArr[key] + " ";
    }
  }
  return resultArr;
};
