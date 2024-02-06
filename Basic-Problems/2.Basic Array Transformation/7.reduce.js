// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
function reduce(nums, fn, init) {
    if (nums.length === 0) {
        return init;
    }
    var ultimateVal = init;
    for (var i = 0; i < nums.length; i++) {
        ultimateVal = fn(ultimateVal, nums[i]);
    }
    return ultimateVal;
}
;
