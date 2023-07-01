// Given an object or an array, return if it is empty.

var isEmpty = function (obj) {
  return !Object.entries(obj).length;
};
