// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null;

  let queue = [];
  queue.push(root);

  while (queue.length) {
    let len = queue.length,
      temp = [];
    for (let i = 0; i < len; i++) {
      let top = queue.shift();
      top.next = queue[0] || null;

      if (top.left) temp.push(top.left);
      if (top.right) temp.push(top.right);
    }
    queue.push(...temp);
  }
  return root;
};
