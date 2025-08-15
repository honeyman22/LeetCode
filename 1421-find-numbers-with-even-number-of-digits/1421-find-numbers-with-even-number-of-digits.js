/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let number = 0;

    nums.forEach(item => {
        if (item.toString().length % 2 === 0) {
            number += 1;
        }
    });

   return number
};