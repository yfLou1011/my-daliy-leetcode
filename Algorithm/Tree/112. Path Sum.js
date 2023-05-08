// https://leetcode.com/problems/path-sum/
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  return dfs(root, targetSum);

  function dfs(root, target) {
    if (!root) return false;
    else if (!root.left && !root.right) return root.val === target;
    else
      return (
        dfs(root.left, target - root.val) || dfs(root.right, target - root.val)
      );
  }
};
