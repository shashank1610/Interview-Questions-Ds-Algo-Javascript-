/*
 Given two lists that contains cost prices CP[] and selling prices SP[] of products respectively.
 The task is to maximize the profit by selling at-most ‘m’ prodcts.
 Input : cp : [5, 10, 35, 7, 23] , sp - [11, 10, 0, 9, 19] , m= 3
 Output : 8
*/

const maximizeProfit = (cp, sp, m) => {
  let profit = [];
  let maxProfit = 0;
  for (let i = 0; i < cp.length; i++) {
    profit[i] = sp[i] - cp[i];
  }
  profit = profit.sort((a, b) => {
    return b - a;
  });
  for (let j = 0; j < m; j++) {
    if (profit[j] > 0) {
        maxProfit += profit[j];
    }
  }
  return maxProfit
};

