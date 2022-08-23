class LinkedList {
  constructor(node) {
    this.head = node;
    this.tail = this.head;
    this.size = 1;
  }

  append = (node) => {
    this.tail.next = node;
    this.tail = node;
    this.size++;
  };
  print() {
    let node = this.head;
    let str = "";
    while (node !== null) {
      str += `${node.value}->`;
      node = node.next;
    }
    str += "null";
    console.log(str);
    return str;
  }
  prepend(node) {
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  insert(node, index) {
    if (index === 0) return this.prepend(node);
    if (index > this.size) return this.append(node);
    let currentNode = this.traverseToIndex(index);
    node.next = currentNode.next;
    currentNode.next = node;
    this.size++;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  remove(index) {
    if (index === 0) return (this.head = this.head.next);
    if (index >= this.size) index = this.size - 1;
    const currentNode = this.traverseToIndex(index - 1);
    currentNode.next = currentNode.next.next;
    this.size--;
  }
  
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const myLinkedList = new LinkedList(new ListNode(1));
myLinkedList.append(new ListNode(2));
myLinkedList.append(new ListNode(3));
myLinkedList.append(new ListNode(5));
myLinkedList.prepend(new ListNode(0));
myLinkedList.insert(new ListNode(3.59), 3);
myLinkedList.insert(new ListNode(4), 50);
myLinkedList.remove(8);
myLinkedList.print();
// console.log(myLinkedList.head);
// console.log(myLinkedList.tail);
// console.log(myLinkedList.size);
