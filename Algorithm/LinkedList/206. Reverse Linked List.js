// https://leetcode.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let pre = null,
    cur = head;

  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
    // console.log({pre, cur, next})
  }
  return pre;
};
