// https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
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
var minDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  let leftMin = minDepth(root.left),
    rightMin = minDepth(root.right);
  if (!root.left || !root.right) return leftMin + rightMin + 1;
  return Math.min(leftMin, rightMin) + 1;
};
