// https://leetcode.com/problems/find-the-difference-of-two-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let s1 = Array.from(new Set([...nums1.sort()]));
  let s2 = Array.from(new Set([...nums2.sort()]));
  let res = [],
    temp1 = [],
    temp2 = s2;

  let len = s1.length;
  for (let i = 0; i < len; i++) {
    let flag = s2.indexOf(s1[i]);
    if (flag !== -1) {
      // 元素重合，temp2剔除重复元素
      temp2.splice(flag, 1);
    } else {
      // 元素不重合，temp1塞入unique元素
      temp1.push(s1[i]);
    }
  }
  res.push(temp1);
  res.push(temp2);
  return res;
};

// 法二:
var findDifference = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let csm = [];
  csm[0] = [...set1].filter((x) => !set2.has(x));
  csm[1] = [...set2].filter((x) => !set1.has(x));
  return csm;
};
