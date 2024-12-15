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
    subContent:[
        {
            title:"Types of Linked List",
            content:[
                ["Singly Linked List"," Each node contains data and a pointer to the next node in the list. It can only be traversed in one direction, from the head to the end."],
                ["Singly Circular Linked List","A singly circular linked list is similar to a singly linked list, but the last node points back to the first node, creating a circular structure. This eliminates the need for a NULL pointer."],
                ["Doubly Linked List","Each node contains data, a pointer to the next node, and a pointer to the previous node. It allows traversal in both forward and backward directions."],
                ["Doubly Circular Linked List","A doubly circular linked list combines the properties of a doubly linked list and a circular linked list. The last node's next pointer points to the head, and the head's previous pointer points to the last node."]        
            ]
        },
        {
            title:"Applications and Real-World Examples of Linked List",
            content:[
                ["Music Playlist","In music players, a playlist is often represented as a linked list where each song is a node, and the next song is linked to it. The music player can easily traverse through songs, go to the next, or previous song by following the links."],
                ["Navigation Systems","Linked lists are used in GPS navigation systems to store and access routes, where each destination is linked to the next, allowing for efficient navigation."],
                ["Memory Management","In memory management systems, free memory blocks can be managed as a linked list, allowing efficient allocation and deallocation of memory."],
                ["Browser History","Browser history is often implemented as a doubly linked list, where each page visited is a node, and the next and previous pages are easily accessible."],
                ["Undo/Redo Operations","Many applications (e.g., word processors) use linked lists to manage undo and redo operations. Each operation is stored as a node, and the user can traverse the history to undo or redo actions."]        
            ]
        },
        {
            title:"Advantages of Linked List",
            content:[
                ["Dynamic Size","Linked lists can dynamically grow and shrink as needed without requiring a fixed size. This makes them more memory-efficient compared to arrays when the exact size of the data structure isn't known in advance."],
                ["Efficient Insertions and Deletions","Adding or removing elements (nodes) is more efficient in linked lists because there's no need to shift elements like in arrays. You only update the pointers, making operations at the head or tail very fast (O(1))."],
                ["No Contiguous Memory Requirement","Unlike arrays, linked lists don’t require contiguous memory allocation. Nodes can be scattered throughout memory and connected via pointers, making them useful when memory is fragmented."],
                ["Flexibility in Data Structures","Linked lists serve as the foundation for implementing more complex data structures such as stacks, queues, and graphs."],
                ["Ease of Expansion","Inserting elements at the beginning or middle of a linked list is straightforward and doesn’t require resizing or reorganizing the entire structure."],        
            ]
        },
        {
            title:"Disadvantages of Linked List",
            content:[
                ["Memory Usage","Linked lists use more memory compared to arrays because each node requires extra memory for storing the pointer/reference."],
                ["Sequential Access","Unlike arrays, linked lists do not allow random access. You must traverse nodes sequentially to access a specific element."],
                ["Complexity in Implementation","Operations like insertion, deletion, or traversal involve pointer manipulation, which can lead to bugs if not handled correctly."],
                ["Cache Locality Issues","Arrays benefit from better cache locality due to contiguous memory storage, while linked lists are scattered across memory, reducing cache performance."],
                ["Slower Access Time","Access time for linked list nodes is slower because you need to traverse each node one by one until the desired element is reached."]        
            ]
        },

    ],
}

const StackData = {
    title: "Stack",
    overview: "A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. Elements are added to and removed from only one end, called the 'top' of the stack. This makes stacks ideal for scenarios where the most recent element needs to be accessed first.",
    subContent:[
        {
            title:"Key Features of a Stack",
            content:[
                ["LIFO Principle", "The Last In, First Out principle ensures that the last element added to the stack is the first one to be removed."],
                ["Single Access Point", "All operations (push, pop, peek) occur at the top of the stack, simplifying implementation."],
                ["Dynamic or Static", "Stacks can be implemented using arrays (static) or linked lists (dynamic), depending on the use case."],
                ["Efficient Operations", "Insertion (push) and deletion (pop) operations are performed in constant time, O(1), at the top of the stack."],
                ["No Fixed Size (Dynamic)", "When implemented using a linked list, stacks do not have a fixed size, making them memory efficient."]        
            ]
        },
        {
            title:"Types of Stack",
            content:[
                ["Simple Stack", "A basic stack where elements follow the LIFO principle, and operations are restricted to one end."],
                ["Array-based Stack", "A stack implemented using an array. It has a fixed size and uses an index to track the top of the stack."],
                ["Linked List-based Stack", "A stack implemented using a linked list, where nodes dynamically store elements and pointers."],
                ["Double-ended Stack (Deque)", "A stack that allows insertion and deletion from both ends, though it is less common."]                        
            ]
        },
        {
            title:"Applications and Real-World Examples of Stack",
            content:[
                ["Expression Evaluation", "Stacks are used to evaluate postfix, prefix, and infix expressions in compilers and calculators."],
                ["Backtracking", "Algorithms like solving mazes or puzzles use stacks to store states during backtracking."],
                ["Undo/Redo Operations", "In text editors or applications, stacks manage the history of user actions for undo/redo functionality."],
                ["Function Call Management", "Stacks are used in programming for managing function calls, creating the call stack."],
                ["Parentheses Matching", "Stacks help in checking the balance of parentheses or other symbols in expressions."],
                ["Syntax parsing","Stacks are used to check the validity of syntax in programming languages and other formal languages."],
                ["Recursion","Stacks are used to store the local variables and return addresses of recursive function calls, allowing the program to keep track of the current state of the recursion."]                        
            ]
        },
        {
            title:"Advantages of Stack",
            content:[
                ["Simplicity"," Stacks are a simple and easy-to-understand data structure, making them suitable for a wide range of applications."],
                ["Efficiency","Push and pop operations on a stack can be performed in constant time (O(1)), providing efficient access to data."],
                ["Last-in, First-out (LIFO)","Stacks follow the LIFO principle, ensuring that the last element added to the stack is the first one removed. This behavior is useful in many scenarios, such as function calls and expression evaluation."],
                ["Limited memory usage","Stacks only need to store the elements that have been pushed onto them, making them memory-efficient compared to other data structures."],                                
            ]
        },
        {
            title:"Disadvantages of Stack",
            content:[
                ["Limited Access", "Stacks restrict access to only the top element, making them unsuitable for scenarios requiring random access."],
                ["Fixed Size (Array)", "If implemented using arrays, stacks have a fixed size, leading to overflow if the array becomes full."],
                ["Memory Overhead (Linked List)", "In a linked list implementation, each element requires extra memory for the pointer."],
                ["Potential for overflow", "If more elements are pushed onto a stack than it can hold, an overflow error will occur, resulting in a loss of data."],
                ["Complexity in Dynamic Growth (Array)", "For dynamic array implementations, resizing the array when it's full can be costly in terms of time."],                        
            ]
        },

    ],
};

const QueueData = {
    title: "Queue",
    overview: "A Queue Data Structure is a fundamental concept in computer science used for storing and managing data in a specific order. It follows the principle of ' First in, First out ' (FIFO), where the first element added to the queue is the first one to be removed. Queues are commonly used in various algorithms and applications for their simplicity and efficiency in managing data flow.",
    subContent:[
        {
            title:"Key Features of a Queue",
            content:[
                ["First-In-First-Out (FIFO) Principle","Elements are processed in the order they arrive: the first element added to the queue is the first one to be removed."],
                ["Linear Data Structure","Elements are arranged in a sequential manner, and operations are performed at the ends of the structure"],
                ["Dynamic or Static Nature","Queues can be implemented using arrays (static size) or linked lists (dynamic size), depending on the requirement."],
                ["Real-Time Behavior","Queues handle real-time scenarios efficiently, such as scheduling and managing shared resources."],
                ["Memory Utilization","When implemented dynamically (using linked lists or dynamic arrays), queues adapt to the number of elements, optimizing memory usage."],
                ["Wide Applications","Used in CPU scheduling, disk scheduling, breadth-first search (BFS), and more."]
            ]
        },
        {
            title:"Types of Queue",
            content:[
                [" Circular Queue","Circular Queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called ‘Ring Buffer’."],
                ["Input restricted Queue"," In this type of Queue, the input can be taken from one side only(rear) and deletion of elements can be done from both sides(front and rear). This kind of Queue does not follow FIFO(first in first out).  This queue is used in cases where the consumption of the data needs to be in FIFO order but if there is a need to remove the recently inserted data for some reason and one such case can be irrelevant data, performance issue, etc. "],
                ["Output restricted Queue","In this type of Queue, the input can be taken from both sides(rear and front) and the deletion of the element can be done from only one side(front).  This queue is used in the case where the inputs have some priority order to be executed and the input can be placed even in the first place so that it is executed first."],
                ["Double ended Queue","Double Ended Queue is also a Queue data structure in which the insertion and deletion operations are performed at both the ends (front and rear). That means, we can insert at both front and rear positions and can delete from both front and rear positions.  Since Deque supports both stack and queue operations, it can be used as both. The Deque data structure supports clockwise and anticlockwise rotations in O(1) time which can be useful in certain applications. Also, the problems where elements need to be removed and or added both ends can be efficiently solved using Deque."],
                ["Priority Queue","A priority queue is a special type of queue in which each element is associated with a priority and is served according to its priority. There are two types of Priority Queues (1)Ascending Priority Queue and (2)Descending priority Queue"]
            ]
        },
        {
            title:"Applications and Real-World Examples of Queue",
            content:[
                ["Multi programming","Multi programming means when multiple programs are running in the main memory. It is essential to organize these multiple programs and these multiple programs are organized as queues."],
                ["Network"," In a network, a queue is used in devices such as a router or a switch. another application of a queue is a mail queue which is a directory that stores data and controls files for mail messages."],
                ["Task Scheduling","In multitasking operating systems, processes waiting for CPU execution are managed using queues (e.g., Ready Queue, I/O Queue)."],
                ["Shared resources","Queues are used as waiting lists for a single shared resource."],
            ]
        },
        {
            title:"Advantages of Queue",
            content:[
                ["Order Management","First-In-First-Out (FIFO) Principle Ensures fairness, as elements are processed in the order they arrive."],
                [" Simplifies Task Scheduling","Useful in operating systems for process scheduling, ensuring efficient resource utilization, helps in background task management, such as processing emails or uploading files."],
                ["Supports Asynchronous Communication","In distributed systems and messaging services (e.g., Kafka, RabbitMQ), queues decouple producers and consumers, allowing tasks to be processed asynchronously."],
                ["Scalability","Queues can handle large volumes of data or tasks efficiently, making them ideal for load balancing and event-driven architectures."],
                ["Easy to Implement","Queues are simple to implement using arrays, linked lists, or specialized libraries."],
                ["Avoids Deadlocks","Prevents deadlocks in systems by queuing tasks and ensuring orderly execution, especially in concurrent programming."],
            ]
        },
        {
            title:"Disadvantages of Queue",
            content:[
                ["Queue overflow","Queue overflow occurs when the queue reaches its maximum capacity and is unable to accept any more elements. This can cause data loss and can lead to application crashes."],
                ["Queue underflow","Queue underflow occurs when an attempt is made to remove an element from an empty queue. This can cause errors and application crashes."],
                ["Priority inversion"," Priority inversion occurs in priority queues when a low-priority task holds a resource that a high-priority task needs. This can cause delays in processing and can impact system performance."],
                ["Performance issues","Queue performance can be impacted by various factors, such as the size of the queue, the frequency of access, and the type of operations performed on the queue. Poor queue performance can lead to slower system performance and reduced user experience."],
                ["Synchronization issues","Synchronization issues can arise when multiple threads are accessing the same queue simultaneously. This can result in data corruption, race conditions, and other errors."],
                ["Memory management issues","Queues can use up significant amounts of memory, especially when processing large data sets. Memory leaks and other memory management issues can occur, leading to system crashes and other errors."]
            ]
        },

    ],
};

export {LinkedListData,StackData,QueueData};