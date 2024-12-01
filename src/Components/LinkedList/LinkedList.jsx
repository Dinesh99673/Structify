import React, { useState } from 'react';
import LinkedListBlock from './SinglyLLDemo';
import LinkedListImage from '../../assets/LinkedList3.drawio.png'; 
import LL_insertion_flow from '../../assets/LL_insertion_flow.png';
import LLDeletion from '../../assets/LLDeletion-At-End.webp';
import CircularLLBlock from './CircularLLDemo';
import DoublyLLBlock from './DoublyLLDemo';
import DoublyCircularLLBlock from './DoublyCircularLLDemo';
import { Box } from '@chakra-ui/react';
import CodeEditor from '../code/CodeEditor';

const LinkedList = () => {
    const [Choice, setChoice] = useState(0);

    const Future = () => {
        alert("Not done yet");
    };

    return (
<div className="p-10 text-[#E0E0E0] flex flex-col lg:flex-row gap-10 items-start z-10 mt-10">
    {/* Text Content */}
    <div className="flex-1 justify-center w-full lg:w-[60%]">
        <h1 className="text-btn-lnk text-5xl font-bold font-serif text-center lg:text-start ">Linked List</h1>
        <p className="mt-4 max-w-full text-1xl md:text-2xl text-justify text-sec-text">
            <span className="text-3xl font-semibold text-pri-text">Overview : </span>A linked list is a linear data structure where elements, known as nodes, are connected in a sequence. 
            Each node contains data and a reference  (or link) to the next node in the sequence. Unlike arrays, 
            linked lists do not store elements in contiguous memory locations, making them efficient for insertion 
            and deletion operations, especially when the exact position of the element doesn’t matter.
        </p>

        <h2 className="text-title text-2xl font-bold mt-6">Key Features of a Linked List</h2>
        <ul className="list-disc ml-5 mt-2 text-lg text-sec-text md:text-xl" >
            <li><span className="text-xl font-semibold text-pri-text">Dynamic memory allocation :</span> Linked lists can dynamically grow and shrink in size, utilizing memory efficiently without pre-allocating a fixed size.</li>
            <li><span className="text-xl font-semibold text-pri-text">Node-Based Structure : </span>
            Each element (node) contains two parts : 
                <ul>
                    <li><span className='font-semibold text-pri-text'>Data :</span> Stores the actual value.</li>
                    <li><span className='font-semibold text-pri-text'>Pointer :</span>  Stores the address of the next node.</li>
                </ul>
            </li>
            <li><span className="text-xl font-semibold text-pri-text">Sequential Access :</span> Nodes are accessed sequentially, starting from the head node and traversing through the pointers.</li>
            <li><span className="text-xl font-semibold text-pri-text">Flexible Insertion and Deletion :</span> Nodes can be added or removed easily without reorganizing the entire structure, unlike arrays.</li>
            <li><span className="text-xl font-semibold text-pri-text">Efficient Memory Usage :</span> Memory is allocated only when required for a new node, avoiding waste associated with unused array slots.</li>
            <li><span className="text-xl font-semibold text-pri-text">No Contiguous Memory Requirement : </span>Nodes can be scattered throughout memory, as they are connected by pointers, not physically stored together. </li>
        </ul>

        <h2 className="text-title text-2xl font-bold mt-6">Types of Linked List</h2>
        <ul className="list-disc ml-5 mt-2 text-lg text-sec-text md:text-xl" >
            <li><span className="text-xl font-semibold text-pri-text">Singly Linked List :</span>  Each node contains data and a pointer to the next node in the list. It can only be traversed in one direction, from the head to the end.</li>
            <li><span className="text-xl font-semibold text-pri-text">Singly Circular Linked List :</span> A singly circular linked list is similar to a singly linked list, but the last node points back to the first node, creating a circular structure. This eliminates the need for a NULL pointer.</li>
            <li><span className="text-xl font-semibold text-pri-text">Doubly Linked List :</span>  Each node contains data, a pointer to the next node, and a pointer to the previous node. It allows traversal in both forward and backward directions.</li>
            <li><span className="text-xl font-semibold text-pri-text">Doubly Circular Linked List : </span>  A doubly circular linked list combines the properties of a doubly linked list and a circular linked list. The last node's next pointer points to the head, and the head's previous pointer points to the last node.</li>
        </ul>

        <div className="flex-1 flex justify-center  mt-6">
            <img 
                src={LinkedListImage} 
                alt="Linked List Visual" 
                className="w-full lg:max-w-2xl bg-gray-950 rounded-md object-contain mt-[20px] mb-6" 
            />
        </div>

        <div className='hidden lg:block w-full mt-10 '>
        <div className="flex flex-row justify-center gap-10 mt-6">
            <div>
        <h2 className="text-title text-3xl font-bold mt-6">Insertion in Singly Linked List</h2>
            <img 
                src={LL_insertion_flow} 
                alt="Linked List Insertion Flowchart" 
                className="w-full max-w-md lg:max-w-2xl bg-black rounded-lg object-contain mt-[10px] mb-6" 
            />
            </div>
            <div>
        <h2 className="text-title text-3xl font-bold mt-6">Deletion in Singly Linked List</h2>
            <img 
                src={LLDeletion} 
                alt="Linked List Insertion Flowchart" 
                className="w-full max-w-md lg:max-w-2xl bg-black rounded-lg object-contain mt-[10px] mb-6" 
            />
            </div>
        </div>
    </div>

    <div className="block lg:hidden md:mt-10 w-full items-center">
        <h2 className="text-title text-2xl font-bold text-center">Insertion in Singly Linked List</h2>
        <div className="flex flex-col justify-center mt-6 ">
            <img 
                src={LL_insertion_flow} 
                alt="Linked List Insertion Flowchart Mobile" 
                className="w-full items-center bg-black rounded-lg object-contain mt-[10px] mb-6" 
            />
            <h2 className="text-title text-2xl font-bold text-center">Deletion in Singly Linked List</h2>
            <img 
                src={LLDeletion} 
                alt="Linked List Insertion Flowchart Mobile" 
                className="w-full items-center bg-black rounded-lg object-contain mt-[10px] mb-6" 
            />
            <p className="text-gray-400 text-center text-lg">
                The flowchart provides a step-by-step visualization of how insertion and Deletion in a singly linked list works.
            </p>
        </div>
    </div>        
        <h2 className="text-cyan-400 font-bold text-2xl mt-6">Types of Linked Lists</h2>
        <div className="mt-6 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full max-w-xl">
            <button onClick={() => setChoice(0)} className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-[#121212] w-full md:w-auto font-semibold">Singly Linked List</button>
            <button onClick={() => setChoice(1)} className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-[#121212] w-full md:w-auto font-semibold">Singly Circular Linked List</button>
            <button onClick={() => setChoice(2)} className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-[#121212] w-full md:w-auto font-semibold">Doubly Linked List</button>
            <button onClick={() => setChoice(3)} className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-[#121212] w-full md:w-auto font-semibold">Double Circular Linked List</button>
        </div>
        {Choice === 0 && <LinkedListBlock />}
        {Choice === 1 && <CircularLLBlock />}
        {Choice === 2 && <DoublyLLBlock />}
        {Choice === 3 && <DoublyCircularLLBlock />}

        <Box minH='100vh' bg="#0f0a19" color="gray.500" px={4} py={8}>
            <CodeEditor/>
        </Box>
    </div>


</div>

    );
};

export default LinkedList;
