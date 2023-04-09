// https://leetcode.com/problems/two-sum/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      // console.log({ key: map.has(target - nums[i]), v: target - nums[i]})
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
};
