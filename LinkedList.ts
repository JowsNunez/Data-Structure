

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
 * @class Node 
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

    public printList() {
        let iterador: Node<T> = this.first;
        let contador = 0
        while (iterador != null) {
            if (iterador.next != null) {
                process.stdout.write(`[ ${iterador.value} ] ---> `);

            } else {
                process.stdout.write(`[ ${iterador.value} ]  `);
            }



            iterador = iterador.next;

            contador++

        }
        console.log()
    }





}


const list: LinkedList<string> = new LinkedList();

list.addFirst('hola')
list.addFirst('hola2')
list.addLast('hola4')
list.addFirst('hola5')
list.addLast('hola6')


list.printList()



