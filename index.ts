import {LinkedList} from './LinkedList'
import {DoublyLinkedList} from './DoublyLinkedList'



const aLinkList = new LinkedList<number>();
aLinkList.addFirst(0)
aLinkList.addFirst(1)
aLinkList.addFirst(2)
aLinkList.addLast(5)

console.log('---------- linkedList --------')

console.log(aLinkList.print())
console.log('\n---------- dbllinkedList --------')

const dblLinkedList = new DoublyLinkedList<number>();


dblLinkedList.addFirst(0)
dblLinkedList.addFirst(1)
dblLinkedList.addFirst(2)
dblLinkedList.addLast(5)

console.log(dblLinkedList.print())




