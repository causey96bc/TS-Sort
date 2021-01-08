import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('ayzbva')
// const LinkedList = new LinkedList()
const characterSort = new Sorter(charactersCollection);
const sorter = new Sorter(numbersCollection);

sorter.sort();
characterSort.sort();
console.log(charactersCollection.data);
console.log(numbersCollection.data);
