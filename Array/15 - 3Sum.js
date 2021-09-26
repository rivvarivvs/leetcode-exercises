/**
 * * Description of the problem
 * Given an integer array nums, return all the triplets 
 * [nums[i], nums[j], nums[k]] such that 
 * i != j, i != k, and j != k, 
 * and nums[i] + nums[j] + nums[k] == 0.
 * 
 * Notice that the solution set must not contain duplicate triplets.
 */

/**
 * * Solution to the problem
 * video explaining it: https://www.youtube.com/watch?v=jXZDUdHRbhY
 * it really does a better job than I ever could
 */

/**
 * Time complexity: O(n2)
 */


var threeSum = function(nums) {
    nums.sort((a,b) => a - b)
    let result = []

    for (let i=0; i<nums.length; i++) {
        let partial = 0 - nums[i]
        let j = i+1
        let k = nums.length-1

        while (j<k) {
            let partialSum = nums[j] + nums[k]
            if (partial === partialSum) {
                result.push([nums[i], nums[j], nums[k]])
            } else if (partial < partialSum) {
                k--
            } else {
                j++
            }
        }
    }

    return result 
};