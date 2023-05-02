// https://leetcode.com/problems/symmetric-tree/description/
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function isMirror(x, y) {
    if (x === null && y === null) return true;
    else if (x === null || y === null) return false;
    else if (x.val !== y.val) return false;
    else return isMirror(x.left, y.right) && isMirror(x.right, y.left);
  }

  return isMirror(root.left, root.right);
};
