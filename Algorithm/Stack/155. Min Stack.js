// https://leetcode.com/problems/min-stack/
var MinStack = function () {
  this.stack = [];
  this.stack2 = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (this.stack2.length === 0 || val <= this.stack2.at(-1))
    this.stack2.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let pop = this.stack.pop();
  if (this.stack2.at(-1) === pop) {
    this.stack2.pop();
  }
  return pop;
};
/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack2.at(-1);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
