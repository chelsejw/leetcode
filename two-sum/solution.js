var twoSum = function (nums, target) {
  let pointer = 0;
  while (pointer < nums.length) {
    for (let i = 0; i < nums.length; i++) {
      if (i <= pointer) continue;
      if (nums[pointer] + nums[i] == target) {
        return [pointer, i];
      }
    }
    pointer++;
  }

  return false;
};
