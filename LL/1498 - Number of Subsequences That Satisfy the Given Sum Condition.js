// TODO: dunno if this one is finished

/**
 * Given an array of integers nums and an integer target.
 * 
 * Return the number of non-empty subsequences of nums such 
 * that the sum of the minimum and maximum element on it 
 * is less or equal to target. Since the answer 
 * may be too large, return it modulo 109 + 7.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    let count = 0;
    nums.sort((a,b) => a-b)
    
    for(let i=0; i<nums.length; i++) {
        let j = i;
        
        while(nums[i] + nums[j] <= target) {
            if (nums[i] + nums[j] <= target) count++
            j++
        }
    } 

    return count
};

console.log(`[${nums[i]}, ${nums[j]}]`)