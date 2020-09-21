var addTwoNumbers = function (l1, l2) {
  let head;
  let pointer;
  let p1 = l1;
  let p2 = l2;
  let carry = false;

  while (p1 || p2 || carry) {
    let val1, val2;
    if (p1) {
      val1 = p1.val;
      p1 = p1.next;
    } else {
      val1 = 0;
    }

    if (p2) {
      val2 = p2.val;
      p2 = p2.next;
    } else {
      val2 = 0;
    }

    let result = val1 + val2;
    if (carry) result++;
    if (result > 9) {
      carry = true;
      result -= 10;
    } else {
      carry = false;
    }

    let myNode = new ListNode(result);
    if (!head) head = myNode;
    if (pointer) pointer.next = myNode;
    pointer = myNode;
  }

  return head;
};
