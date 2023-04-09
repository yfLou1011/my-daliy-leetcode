// https://leetcode.com/problems/reverse-linked-list-ii/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dummy = new ListNode();
  dummy.next = head;
  let pre,
    cur,
    leftPre = dummy;

  // 找到反转的前序节点
  for (let i = 0; i < left - 1; i++) {
    leftPre = leftPre.next;
  }

  // start为反转区间的第一个节点
  let start = leftPre.next;
  pre = start;
  cur = pre.next;
  // console.log('1:', {leftPre, pre, cur})

  // 处理局部反转
  for (let i = left; i < right; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  // 处理反转的前序节点
  leftPre.next = pre;

  // 处理反转的后续节点
  start.next = cur;

  // console.log('2: ', {leftPre, start, pre, cur})
  return dummy.next;
};
