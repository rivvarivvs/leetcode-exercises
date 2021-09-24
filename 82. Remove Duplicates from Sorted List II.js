
/** 
 * * Description of the problem
 * Given the head of a sorted linked list, 
 * delete all nodes that have duplicate numbers, 
 * leaving only distinct numbers from the original list. 
 * Return the linked list sorted as well.
 */

/** 
 * * Solution explanation:
 * This problem requires two methods to be solved:
 * 
 * 1. The first one is a sentinel, where a ListNode is created
 * that contains no data, just a pointer to the list's head
 * so we can manipulate where the list begins. This is useful
 * in the case where the first values in the list are duplicated.
 * 
 * 2. Secondly, we need a predecessor so when we find a sublist
 * that contains duplicated numbers, we can point the predecessor
 * to the node that is after this sublist of duplicated values
 */

var deleteDuplicates = function (head) {
  let sentinel = new ListNode(0, head)
  let pred = sentinel

  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      pred.next = head.next;
    } else {
      pred = pred.next;
    }
    head = head.next;
  }
  return sentinel.next;
};
