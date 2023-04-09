// https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let origin = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let res = origin.split("").reverse().join("");
  // console.log({origin, res})
  return origin === res;
};
