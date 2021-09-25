/** 
 * * Description of the problem
 * Given head which is a reference node to a singly-linked list. 
 * The value of each node in the linked list is either 0 or 1. 
 * The linked list holds the binary representation of a number. 
 * 
 * Return the decimal value of the number in the linked list.
 */

/** 
 * * Solution explanation:
 * 1. Transverse the Linked List using recursion
 * 
 * 2. If we haven't reached the end of the LL,
 * point to the next node, double the dec accumulator and
 * add the value of the add to it
 */
var getDecimalValue = (head, dec = 0) => {
  return !head ? dec : getDecimalValue(head.next, dec * 2 + head.val);
};