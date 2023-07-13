// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements

var moveZeroes = (nums) => {
  let zerosNum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
      zerosNum++;
      i--;
    }
  }

  return nums.concat(Array(zerosNum).fill(0));
};
