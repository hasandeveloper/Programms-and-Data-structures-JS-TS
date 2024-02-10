// 1. Two Sum
// Easy
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
function twoSum(nums, target) {
    if (nums.length === 0) {
        return nums;
    }
    var sumOfindices = [];
    nums.map(function (outele, outindex) {
        if (nums[outindex + 1] === undefined) {
            return sumOfindices;
        }
        nums.map(function (inele, inindex) {
            if (outele + nums[outindex + 1] === target) {
                sumOfindices.push(outindex, outindex + 1);
                return sumOfindices;
            }
        });
    });
}
;
console.log(twoSum([2, 5, 5, 11], 10));
