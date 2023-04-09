// https://leetcode.com/problems/design-add-and-search-words-data-structure/
var WordDictionary = function () {
  this.words = {};
  // this.words = new Map();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  // 为了降低查找时的复杂度，我们可以考虑以字符串的长度为 key相同长度的字符串存在一个数组中
  // 这样可以提高我们后续定位的效率
  let len = word.length;
  if (this.words[len]) {
    this.words[len].push(word);
  } else {
    this.words[len] = [word];
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  // 若该字符串长度在 Map 中对应的数组根本不存在，则可判断该字符串不存在
  const len = word.length;
  if (!this.words[len]) return false;

  // word是string还是正则
  if (!word.includes(".")) {
    // 是string
    return this.words[len].includes(word);
  } else {
    // 正则处理
    // 否则是正则表达式，要先创建正则表达式对象
    const reg = new RegExp(word);
    // 只要数组中有一个匹配正则表达式的字符串，就返回true
    return this.words[len].some((i) => reg.test(i));
  }
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
