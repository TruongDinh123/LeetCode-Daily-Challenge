// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

const list1 = [1,2,4];
const list2 = [1,3,4];

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(
    l1: ListNode | null,
    l2: ListNode | null
  ): ListNode | null {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
  
    if (l1.val <= l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  }
  
  const l1 = new ListNode(1);
  l1.next = new ListNode(2);

  const l2 = new ListNode(1);
  l2.next = new ListNode(3);

  l1.next.next = new ListNode(4);
  l2.next.next = new ListNode(4);
  
  const mergedList = mergeTwoLists(l1, l2);
  
  let current = mergedList;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }