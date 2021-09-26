/**
 * * Description of problem
 * Given the head of a linked list, 
 * return the node where the cycle begins. 
 * If there is no cycle, return null.
 * 
 * There is a cycle in a linked list if 
 * there is some node in the list that 
 * can be reached again by continuously 
 * following the next pointer.
 * 
 * Do not modify the linked list.
 */

/**
 * * Solution
 * 1. We use the fast + slow runner solution
 * to determine if there's a cycle
 * 
 * 2. If there is, we use a second slow runner
 * to transverse the list until it finds the first s
 * runner, which is also moving a node at a time.
 * When they meet, return the node.
 */

/**
 * Time complexity: O(m+n)
 */

var detectCycle = function(head) {
    let s = head;
    let f = head;
    let isCycle = false
    
    while (f && f.next) {
        s = s.next;
        f = f.next.next
        
        if (s===f) {
            isCycle = true
            break;
        }
    }
    
    if(isCycle) {
        let s2 = head
        while (s !== s2) {
            s = s.next
            s2 = s2.next
        }
        
        return s
    }
    
    return null
};