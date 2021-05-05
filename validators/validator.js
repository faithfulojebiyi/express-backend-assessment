function isString(val) {
  return Object.prototype.toString.call(val) === "[object String]";
}

module.exports = { isString };
