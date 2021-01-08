import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('ayzbva')
const linkedList = new LinkedList()
linkedList.add(500);
linkedList.add(-10);
linkedList.add(4);
linkedList.add(-3);

const characterSort = new Sorter(charactersCollection);
const sorter = new Sorter(numbersCollection);
const linkedListSorter = new Sorter(linkedList)
sorter.sort();
characterSort.sort();
linkedListSorter.sort();
console.log(charactersCollection.data);
console.log(numbersCollection.data);
