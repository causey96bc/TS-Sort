# Sorter-Typescript.
    - a simple typescript sorting application that sorts through multiple data types.
    - includes a linked list sorting algorithm.

 # Data Types
    - Character collections (a string of characters that will be sorted through alphabetically).
    - Number collections (an array of values in any order that will be sorted through least to greatest).
    - Linked List (is a linear collection of values that is sorted by the next value it points to not the place in memory or the numerical value).
# Sorter
    - first we create a sortable interface which requires two functions to be completed for a collection to be sorted through. This interface provides instructions to our functions on how to be eligible for sorting. As long as a length property, a compare function, and a swap function is provided a data type can be sorted.   

    - Second sorter class that takes the sortable interface defined on line two (Sorter.ts). We then start the sorting function where we interate through a specific collection that will reference the sortable interface which contains our two key functions. compare and swap. 

# Numbers Collection
    - Compare Function: takes the value at the left index and ask if it is less than the value at the right index. If so it then moves to the swap function.
    - the swap function then takes the values from the left and right indexes and sets the value of the right index and sets it to the left hand side. 
    = it then repeats until the numbers are sorted least to greatest. 
# Characters Collection
    - to get the correct the correct data for characters you must transform the data at the left index and right index for the compare function to lowercase so they can be compared correctly.
    - takes the characters at the left index if its less than the right and swaps it with the right index. we use the split method to seperate the characters in an array.
    - after you get the data from the array of characters you then join the seperated characters back together and retrieve the data.

# Linked List 
    - In a linked list we have nodes and every node has a number and then every node has a value that points to the next node. We also have a head node value that points to the first value in the node.  

    - a node can have two properties that either points to number value or next property and if a node doesnt have a node property then it will be null.

    - The linked list class will reference to the node or null, which will mean that the linked list is now empty. The list will also start out empty.

    - add() takes a number and adds it as a node in the linked last in the very last position. if theres no head then we return immediately and print the linked list as is. While the head node has a next property then we progress the list to the tail. tail points to the value of the head node. It also increases the length of the linked list during this process. 
    
    - getter: if theres no head we return 0 that means the linked list is empty.
      we then grab the first value in the node and there is a next value we then update the node value to point to the next value in the chain. 
    
    - at() takes an index and returns the node, but if there is no head property then there is no index in that bounds. While there is a node we then set the counter equal to index and return the current node. We then increment the counter to reflect the next node. 

    -  Compare() Check for a head if there isnt one then we can assume the linked list is empty. We then return using the at() method to find the index and check to see if left is less than the right. 

    - Swap() takes the nodes at the left index and right index that were compared above and swaps them based on the result of the compare function and it takes that data and will print it while there is a node.

    - print() logs the data from the above methods and will display the linked list accordingly until there is no tail and the resulting node becomes null. 
