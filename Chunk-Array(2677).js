// Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

var chunk = function (arr, size) {
  const resultArr = [];

  while (arr.length) {
    resultArr.push(arr.slice(0, size));
    arr = arr.slice(size);
  }

  return resultArr;
};
