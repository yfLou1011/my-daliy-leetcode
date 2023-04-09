// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [],
    arr = s.split(""),
    len = arr.length;
  let map = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");

  if (len % 2) return false;
  for (let i = 0; i < len; i++) {
    let peek = stack.at(-1);
    // console.log({peek}, {a: map.has(peek), b: map.get(peek), c: arr[i]})
    if (map.has(peek) && map.get(peek) === arr[i]) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  return !stack.length;
};
