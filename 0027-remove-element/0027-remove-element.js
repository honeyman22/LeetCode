/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
      let k = 0; // pointer for the "valid" part of array
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // overwrite unwanted values
            k++;
        }
    }
    
    nums.length = k; // truncate the array
    return k;

};