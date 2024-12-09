const LinkedListData = {
    title:"Linked List",
    overview:"A linked list is a linear data structure where elements, known as nodes, are connected in a sequence. Each node contains data and a reference  (or link) to the next node in the sequence. Unlike arrays, linked lists do not store elements in contiguous memory locations, making them efficient for insertion and deletion operations, especially when the exact position of the element doesn’t matter.",
    features:[  
        ["Dynamic memory allocation","Linked lists can dynamically grow and shrink in size, utilizing memory efficiently without pre-allocating a fixed size."],
        ["Sequential Access","Nodes are accessed sequentially, starting from the head node and traversing through the pointers."],
        ["Flexible Insertion and Deletion","Nodes can be added or removed easily without reorganizing the entire structure, unlike arrays."],
        ["Efficient Memory Usage","Memory is allocated only when required for a new node, avoiding waste associated with unused array slots."],
        ["No Contiguous Memory Requirement","Nodes can be scattered throughout memory, as they are connected by pointers, not physically stored together."]
    ],
    types:[
        ["Singly Linked List"," Each node contains data and a pointer to the next node in the list. It can only be traversed in one direction, from the head to the end."],
        ["Singly Circular Linked List","A singly circular linked list is similar to a singly linked list, but the last node points back to the first node, creating a circular structure. This eliminates the need for a NULL pointer."],
        ["Doubly Linked List","Each node contains data, a pointer to the next node, and a pointer to the previous node. It allows traversal in both forward and backward directions."],
        ["Doubly Circular Linked List","A doubly circular linked list combines the properties of a doubly linked list and a circular linked list. The last node's next pointer points to the head, and the head's previous pointer points to the last node."]
    ],
    applications:[
        ["Music Playlist","In music players, a playlist is often represented as a linked list where each song is a node, and the next song is linked to it. The music player can easily traverse through songs, go to the next, or previous song by following the links."],
        ["Navigation Systems","Linked lists are used in GPS navigation systems to store and access routes, where each destination is linked to the next, allowing for efficient navigation."],
        ["Memory Management","In memory management systems, free memory blocks can be managed as a linked list, allowing efficient allocation and deallocation of memory."],
        ["Browser History","Browser history is often implemented as a doubly linked list, where each page visited is a node, and the next and previous pages are easily accessible."],
        ["Undo/Redo Operations","Many applications (e.g., word processors) use linked lists to manage undo and redo operations. Each operation is stored as a node, and the user can traverse the history to undo or redo actions."]
    ],
    advantages:[
        ["Dynamic Size","Linked lists can dynamically grow and shrink as needed without requiring a fixed size. This makes them more memory-efficient compared to arrays when the exact size of the data structure isn't known in advance."],
        ["Efficient Insertions and Deletions","Adding or removing elements (nodes) is more efficient in linked lists because there's no need to shift elements like in arrays. You only update the pointers, making operations at the head or tail very fast (O(1))."],
        ["No Contiguous Memory Requirement","Unlike arrays, linked lists don’t require contiguous memory allocation. Nodes can be scattered throughout memory and connected via pointers, making them useful when memory is fragmented."],
        ["Flexibility in Data Structures","Linked lists serve as the foundation for implementing more complex data structures such as stacks, queues, and graphs."],
        ["Ease of Expansion","Inserting elements at the beginning or middle of a linked list is straightforward and doesn’t require resizing or reorganizing the entire structure."],
    ],
    drawbacks:[
        ["Memory Usage","Linked lists use more memory compared to arrays because each node requires extra memory for storing the pointer/reference."],
        ["Sequential Access","Unlike arrays, linked lists do not allow random access. You must traverse nodes sequentially to access a specific element."],
        ["Complexity in Implementation","Operations like insertion, deletion, or traversal involve pointer manipulation, which can lead to bugs if not handled correctly."],
        ["Cache Locality Issues","Arrays benefit from better cache locality due to contiguous memory storage, while linked lists are scattered across memory, reducing cache performance."],
        ["Slower Access Time","Access time for linked list nodes is slower because you need to traverse each node one by one until the desired element is reached."]
    ]
}

const StackData = {
    title: "Stack",
    overview: "A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. Elements are added to and removed from only one end, called the 'top' of the stack. This makes stacks ideal for scenarios where the most recent element needs to be accessed first.",
    features: [
        ["LIFO Principle", "The Last In, First Out principle ensures that the last element added to the stack is the first one to be removed."],
        ["Single Access Point", "All operations (push, pop, peek) occur at the top of the stack, simplifying implementation."],
        ["Dynamic or Static", "Stacks can be implemented using arrays (static) or linked lists (dynamic), depending on the use case."],
        ["Efficient Operations", "Insertion (push) and deletion (pop) operations are performed in constant time, O(1), at the top of the stack."],
        ["No Fixed Size (Dynamic)", "When implemented using a linked list, stacks do not have a fixed size, making them memory efficient."]
    ],
    types: [
        ["Simple Stack", "A basic stack where elements follow the LIFO principle, and operations are restricted to one end."],
        ["Array-based Stack", "A stack implemented using an array. It has a fixed size and uses an index to track the top of the stack."],
        ["Linked List-based Stack", "A stack implemented using a linked list, where nodes dynamically store elements and pointers."],
        ["Double-ended Stack (Deque)", "A stack that allows insertion and deletion from both ends, though it is less common."]
    ],
    applications: [
        ["Expression Evaluation", "Stacks are used to evaluate postfix, prefix, and infix expressions in compilers and calculators."],
        ["Backtracking", "Algorithms like solving mazes or puzzles use stacks to store states during backtracking."],
        ["Undo/Redo Operations", "In text editors or applications, stacks manage the history of user actions for undo/redo functionality."],
        ["Function Call Management", "Stacks are used in programming for managing function calls, creating the call stack."],
        ["Parentheses Matching", "Stacks help in checking the balance of parentheses or other symbols in expressions."],
        ["Syntax parsing","Stacks are used to check the validity of syntax in programming languages and other formal languages."],
        ["Recursion","Stacks are used to store the local variables and return addresses of recursive function calls, allowing the program to keep track of the current state of the recursion."]
    ],
    advantages:[
        ["Simplicity"," Stacks are a simple and easy-to-understand data structure, making them suitable for a wide range of applications."],
        ["Efficiency","Push and pop operations on a stack can be performed in constant time (O(1)), providing efficient access to data."],
        ["Last-in, First-out (LIFO)","Stacks follow the LIFO principle, ensuring that the last element added to the stack is the first one removed. This behavior is useful in many scenarios, such as function calls and expression evaluation."],
        ["Limited memory usage","Stacks only need to store the elements that have been pushed onto them, making them memory-efficient compared to other data structures."],        
    ],
    drawbacks: [
        ["Limited Access", "Stacks restrict access to only the top element, making them unsuitable for scenarios requiring random access."],
        ["Fixed Size (Array)", "If implemented using arrays, stacks have a fixed size, leading to overflow if the array becomes full."],
        ["Memory Overhead (Linked List)", "In a linked list implementation, each element requires extra memory for the pointer."],
        ["Potential for overflow", "If more elements are pushed onto a stack than it can hold, an overflow error will occur, resulting in a loss of data."],
        ["Complexity in Dynamic Growth (Array)", "For dynamic array implementations, resizing the array when it's full can be costly in terms of time."],
    ]
};


export {LinkedListData,StackData};