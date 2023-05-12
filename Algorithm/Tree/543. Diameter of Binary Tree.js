// https://leetcode.com/problems/diameter-of-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  if (!root || (!root.left && !root.right)) return 0;

  let res = 0;
  getMax(root);

  function getMax(root) {
    if (!root) return 0;
    const left = getMax(root.left);
    const right = getMax(root.right);
    res = Math.max(res, left + right + 1);
    // console.log({res, left, right});
    return Math.max(left, right) + 1;
  }

  return res - 1;
};
