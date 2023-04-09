// https://leetcode.com/problems/daily-temperatures/
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = [],
    len = temperatures.length;
  let res = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    while (stack.length >= 0 && temperatures[i] > temperatures[stack.at(-1)]) {
      let top = stack.pop();
      res[top] = i - top;
    }
    stack.push(i);
  }
  return res;
};
