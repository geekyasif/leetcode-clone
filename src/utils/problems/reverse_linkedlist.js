import assert from "assert";

// JS doesn't have a built in LinkedList class, so we'll create one
class LinkedList {
  value;
  next;
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  reverse() {
    let current = this;
    let prev = null;
    while (current !== null) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
}

// it creates a linked list from an array
function createLinkedList(values) {
  const head = new LinkedList(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    const node = new LinkedList(values[i]);
    current.next = node;
    current = node;
  }
  return head;
}

export const reverseLinkedListHandler = (fn) => {
  try {
    const tests = [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 2, 3], [1]];
    const answers = [[5, 4, 3, 2, 1], [1, 2, 3, 4, 5], [3, 2, 1], [1]];
    for (let i = 0; i < tests.length; i++) {
      const list = createLinkedList(tests[i]);
      const result = fn(list);
      console.log(getListValues(result), answers[i]);
    }
    return true;
  } catch (error) {
    console.log("Error from reverseLinkedListHandler: ", error);
    throw new Error(error);
  }
};

// it returns an array of values from a linked list
function getListValues(head) {
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }
  return values;
}

const starterCodeReverseLinkedListJS = `
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// Do not edit function name
function reverseLinkedList(head) {
  // Write your code here
};`;

export const reverseLinkedList = {
  id: "reverse-linked-list",
  title: "2. Reverse Linked List",
  problemStatement: `<p>Given the&nbsp;<code>head</code>&nbsp;of a singly linked list, reverse the list, and return&nbsp;<em>the reversed list</em>.</p>

  <p>&nbsp;</p>
  
  <p><strong>Example 1:</strong></p>
  
  <p><img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg" /></p>
  
  <pre>
  <strong>Input:</strong> head = [1,2,3,4,5]
  <strong>Output:</strong> [5,4,3,2,1]
  </pre>
  
  <p><strong>Example 2:</strong></p>
  
  <p><img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg" /></p>
  
  <pre>
  <strong>Input:</strong> head = [1,2]
  <strong>Output:</strong> [2,1]
  </pre>
  
  <p><strong>Example 3:</strong></p>
  
  <pre>
  <strong>Input:</strong> head = []
  <strong>Output:</strong> []
  </pre>
  
  <p>&nbsp;</p>
  
  <p><strong>Constraints:</strong></p>
  
  <ul>
    <li>The number of nodes in the list is the range&nbsp;<code>[0, 5000]</code>.</li>
    <li><code>-5000 &lt;= Node.val &lt;= 5000</code></li>
  </ul>
  
  <p>&nbsp;</p>
  
  <p><strong>Follow up:</strong>&nbsp;A linked list can be reversed either iteratively or recursively. Could you implement both?</p>
  `,
  starterCode: starterCodeReverseLinkedListJS,
  handlerFunction: reverseLinkedListHandler,
  starterFunctionName: "function reverseLinkedList(",
  order: 2,
};
