// https://leetcode.com/problems/binary-tree-level-order-traversal/
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [],
    res = [];
  queue.unshift(root);

  while (queue.length) {
    let len = queue.length,
      temp = [];
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
      temp.push(cur.val);
      // console.log({temp, queue, res});
    }
    res.push(temp);
  }
  return res;
};
