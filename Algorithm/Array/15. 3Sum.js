// https://leetcode.com/problems/3sum/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => {
    return a - b;
  });
  let len = nums.length,
    res = [];
  for (let i = 0; i < len - 2; i++) {
    let j = i + 1,
      k = len - 1;
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
        // console.log(nums[i], nums[j], nums[k], {i, j, k})
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else {
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }
  return res;
};
