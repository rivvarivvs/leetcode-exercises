/**
 * * Description of problem
 * Given head, the head of a linked list, 
 * determine if the linked list has a cycle in it.
 * 
 * There is a cycle in a linked list if there is 
 * some node in the list that can be reached again 
 * by continuously following the next pointer. 
 * 
 * Return true if there is a cycle in the linked list. 
 * Otherwise, return false.
 */

/**
 * * Solution
 * This is the most simple case of the fast + slow runner
 * pointer technique. Where the slow transverse the LL
 * slower than the faster one.
 * 
 * In this case, if the slow and fast are ever equal it's
 * because there's a cycle in the list, and we return true
 */

/**
 * Time complexity: O(n)
 */

var hasCycle = function(head) {
    let slow = head
    let fast = head
    
    while (fast && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        
        if (slow === fast) return true
    }
    
    return false
};  