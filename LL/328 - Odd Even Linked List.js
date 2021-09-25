/**
 * * Description of the problem
 * Given the head of a singly linked list, 
 * group all the nodes with odd indices together 
 * ollowed by the nodes with even indices, 
 * and return the reordered list.
 * 
 * The first node is considered odd, 
 * and the second node is even, and so on.
 * 
 * Note that the relative order inside 
 * both the even and odd groups 
 * should remain as it was in the input.
 * 
 * You must solve the problem in 
 * O(1) extra space complexity and O(n) time complexity.
 */

/**
 * * Solution to the problem
 * 1. Firstly, if the LL is empty, we return head (it's null)
 * If it has only one or two nodes, it's sorted rightly,
 * so return it
 * 
 * 2. Else we declare odd and even. The even will
 * stay equal, so we can connect the final odd list to 
 * the final even list
 * 
 * 3. We just loop through it and 
 *  3.1 we declare the next even number
 *      to do the operation on
 *  3.2 we update the pointer on the odd
 *      to point to the next odd, and we move to it
 *  3.3 we point the even number in temp to the
 *      next even number
 * 
 * 4. finally, we connect the odd and even list
 * 
 * this video explains the operations we have to do
 * on the LL - https://www.youtube.com/watch?v=YE9ggKeHeK0
 */

var oddEvenList = function(head) {
    if (!head || !head.next || !head.next.next) return head

    let odd = head
    let even = head.next

    while(odd.next && odd.next.next) {
        let temp = odd.next
        odd.next = odd.next.next
        odd = odd.next
        temp.next = odd.next
    }

    odd.next = even
    return head
}