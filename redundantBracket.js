/*
Given a string of balanced expression, find if it contains a redundant parenthesis or not.
A set of parenthesis are redundant if same sub-expression is surrounded by unnecessary or
 multiple brackets. Print ‘Yes’ if redundant else ‘No’.
Input: 
((a+b))
(a+(b)/c)
(a+b*(c-d))
Output: 
Yes
Yes
No
*/

const redundantBracket = str => {
  let stack = [];
  for (let char of str) {
    if (char == ")") {
      let top = stack.pop();
      let ans = true;
      while (top != "(") {
        if (top == "+" || top == "-" || top == "*" || top == "/") ans = false;
        top = stack.pop();
      }
      if (ans == true) {
        return 'YES';
      }
    } else stack.push(char);
  }
  return 'NO';
};

