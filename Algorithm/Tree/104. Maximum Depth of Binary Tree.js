// https://leetcode.com/problems/maximum-depth-of-binary-tree/

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
var maxDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  let max = 1,
    depth = 1;
  getMax(root, depth);

  function getMax(root, depth) {
    if (!root) {
      max = Math.max(max, depth - 1);
      return;
    }
    getMax(root.left, depth + 1);
    getMax(root.right, depth + 1);
  }
  return max;
};
