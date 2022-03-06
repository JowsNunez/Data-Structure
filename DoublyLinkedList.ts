

/**
 * @class Node 
 * @type T 
 */
export class Node<T> {
    prev: Node<T>
    value: T | T[]
    next: Node<T>

    constructor(value: T, prev?: Node<T>, next?: Node<T>) {
        this.value = value
        next == null ? this.next = null : this.next = next
        prev == null ? this.prev = null : this.prev = prev
    }




}

/**
 *  @class
 */
export class DoublyLinkedList<T>{

    first: Node<T>
    last: Node<T>

    constructor() {
        this.first = null
        this.last = null
    }


    public addFirst(value: T) {
        const newNode: Node<T> = new Node<T>(value, null, this.first)
        // [{null} first {null}]
        if (this.first) {

            // [ {null} newNode { next: first }]
            newNode.next = this.first;
            //[ {newNode} first {null}]

            this.first.prev = newNode;
            // [{null}newNode{first}], [{newNode} first {null}]
            this.first = newNode;
        } else {
            this.first = newNode
            this.last = newNode
        }
    }

    public addLast(value: T) {
        const newNode: Node<T> = new Node<T>(value, this.last, null)

        if (this.last) {
            newNode.prev = this.last
            this.last.next = newNode
            this.last = newNode
        } else {
            this.last = newNode
            this.first = this.last
        }
    }


    public print() {
        let current = this.first;
        let result = '';
        while (current) {

            current.next ? result += ` ${current.value} <->` : result += ` ${current.value} `

            current = current.next


        }
        return result
    }

}




