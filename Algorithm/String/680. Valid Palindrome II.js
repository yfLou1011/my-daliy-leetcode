// https://leetcode.com/problems/valid-palindrome-ii/
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let len = s.length;
  let left = 0,
    right = len - 1;
  while (left <= right && s[left] === s[right]) {
    left++;
    right--;
  }
  // console.log({left, right})
  if (isPalindrome(left + 1, right)) {
    return true;
  } else if (isPalindrome(left, right - 1)) {
    return true;
  }

  return false;

  function isPalindrome(i, j) {
    while (i < j) {
      if (s[i] !== s[j]) return false;
      i++;
      j--;
    }
    return true;
  }
};
