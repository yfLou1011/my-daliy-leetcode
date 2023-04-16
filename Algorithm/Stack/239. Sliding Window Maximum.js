// https://leetcode.com/problems/sliding-window-maximum/

// brute force
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let res = [],
    len = nums.length;
  let left = 0,
    right = k - 1;
  while (right < len) {
    const max = calMax(nums, left, right);
    res.push(max);
    left++;
    right++;
  }
  return res;
};

function calMax(arr, left, right) {
  // 处理数组为空的边界情况
  if (!arr || !arr.length) {
    return;
  }
  // console.log(arr[left], arr[right])
  let maxNum = arr[left];
  // 遍历窗口内所有元素，更新 maxNum 的值
  for (let i = left; i <= right; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

// monotonic queue
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const len = nums.length;
  let res = [],
    queue = [];

  for (let i = 0; i < len; i++) {
    // pop()
    while (queue.length && nums[queue.at(-1)] < nums[i]) {
      queue.pop();
    }

    // push to queue
    queue.push(i);

    // shift - queue
    while (queue.length && queue[0] <= i - k) {
      queue.shift();
    }

    // push to res
    if (i >= k - 1) {
      res.push(nums[queue[0]]);
    }
    // console.log({i, queue, res});
  }
  return res;
};
