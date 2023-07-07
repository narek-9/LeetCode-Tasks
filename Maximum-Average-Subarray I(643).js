// You are given an integer array nums consisting of n elements, and an integer k
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

var findMaxAverage = function (nums, k) {
  let maxAverage = 0;

  for (let i = 0; nums.length >= k; i++) {
    const average =
      nums.slice(0, k).reduce((sum, value) => (sum += value), 0) / k;
    maxAverage = average > maxAverage ? average : maxAverage;
    nums = nums.slice(1, nums.length);
  }

  return maxAverage;
};
