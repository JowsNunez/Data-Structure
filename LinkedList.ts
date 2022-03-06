

/**
 * @class Node 
 * @type T 
 */
export class Node<T> {
    value: T | T[]
    next: Node<T>

    constructor(value: T, next?: Node<T>) {
        this.value = value
        if (next == null) {
            this.next = null
        } else {
            this.next = next
        }
    }




}

/**
 * @class LinkedList 
 * @type T 
 */
export class LinkedList<T> {

    first: Node<T>;
    last: Node<T>;

    constructor() {
        this.first = null;
        this.last = null;

    }


    /**
     * @method addFirst This method insert in first position of Linkedlist
     * @param value This param represents any value
     */
    public addFirst(value: any) {

        // crated instance of Node with arguments:  value and next, 
        this.first = new Node<T>(value, this.first)

        // if parameter of this class equals null last param  get value of first parameter
        if (this.last == null) {
            this.last = this.first
        }

    }


    /**
    * @method addLast This method insert in first position of Linkedlist
    * @param value This param represents any value
    */
    public addLast(value: any) {

        // if first parameter equals null value, 
        if (this.first != null) {
            // the parameter with name next in last parameter get value  of new Node instance 
            this.last.next = new Node<T>(value)
            // and parameter with name last get value in the parameter with name next in last parameter
            this.last = this.last.next

        } else {
            // the parameters with name first and last get value of new Instance Node
            this.first = this.last = new Node<T>(value);
        }

    }

    public print() {
        let current: Node<T> = this.first;
        let result = ''
        while (current != null) {

            current.next ? result += ` ${current.value} ->` : result += ` ${current.value} `

            current = current.next

        }
        return result
    }

}





