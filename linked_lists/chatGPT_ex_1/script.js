class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(data) {
      const newNode = new Node(data);
  
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
  
        while (current.next !== null) {
          current = current.next;
        }
  
        current.next = newNode;
      }
    }
  
    remove(data) {
      if (this.head === null) {
        return null;
      }
  
      if (this.head.data === data) {
        this.head = this.head.next;
        return this.head;
      }
  
      let current = this.head;
      let previous = null;
  
      while (current !== null) {
        if (current.data === data) {
          previous.next = current.next;
          return this.head;
        }
  
        previous = current;
        current = current.next;
      }
  
      return null;
    }
  
    print() {
      let current = this.head;
  
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  const linkedList = new LinkedList();
  
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  
  linkedList.print(); // Output: 1 2 3
  
  linkedList.remove(2);
  
  linkedList.print(); // Output: 1 3
  