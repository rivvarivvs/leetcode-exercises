
/**
 * * Description of the problem
 * Given n non-negative integers a1, a2, ..., an , where each represents 
 * a point at coordinate (i, ai). n vertical lines are drawn such that 
 * the two endpoints of the line i is at (i, ai) and (i, 0). 
 * Find two lines, which, together with the x-axis forms a container, 
 * such that the container contains the most water.
 */

/**
 * * Solution to the problem
 * 1. Using the two pointer approach where the left one
 * points to the beginning and the right to the end
 * 
 * 2. We calculate the lower number so the container doesn't
 * overflow. After it we calculate the area and compare it to max
 * 
 * 3. Then we see which side is lower so we move that pointer
 * further inside.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        let maxHeight = Math.min(height[left], height[right])
        max = Math.max(max, maxHeight*(right-left))

        if (height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }

    return max
};  