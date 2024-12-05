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
<div className="p-10 max-w-full text-[#E0E0E0] flex flex-col lg:flex-row gap-10 items-start z-10 mt-10">
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

        <h2 className="text-title text-2xl font-bold mt-6">Applications and Real-World Examples of Linked List</h2>
        <ul className="list-disc ml-5 mt-2 text-lg text-sec-text md:text-xl" >
            <li><span className="text-xl font-semibold text-pri-text">Music Playlist:</span> In music players, a playlist is often represented as a linked list where each song is a node, and the next song is linked to it. The music player can easily traverse through songs, go to the next, or previous song by following the links.</li>
            <li><span className="text-xl font-semibold text-pri-text">Navigation Systems:</span> Linked lists are used in GPS navigation systems to store and access routes, where each destination is linked to the next, allowing for efficient navigation.</li>
            <li><span className="text-xl font-semibold text-pri-text">Memory Management:</span> In memory management systems, free memory blocks can be managed as a linked list, allowing efficient allocation and deallocation of memory.</li>
            <li><span className="text-xl font-semibold text-pri-text">Browser History:</span> Browser history is often implemented as a doubly linked list, where each page visited is a node, and the next and previous pages are easily accessible.</li>
            <li><span className="text-xl font-semibold text-pri-text">Undo/Redo Operations:</span> Many applications (e.g., word processors) use linked lists to manage undo and redo operations. Each operation is stored as a node, and the user can traverse the history to undo or redo actions.</li>
        </ul>

        <div className="overflow-x-auto md:max-w-2xl max-w-md mx-auto  my-8 rounded-xl">
            <table className="w-full border-collapse border-gray-400 shadow-lg text-heading">
                <thead>
                <tr className="bg-cyan-500 text-white">
                    <th className="px-6 py-3 text-left font-bold text-lg" colSpan="5">Linked List Operations and Time Complexity</th>
                </tr>
                <tr className="bg-cyan-400 text-white">
                    <th className="px-4 py-2 text-left font-semibold">Operation</th>
                    <th className="px-4 py-2 text-center font-semibold">Singly</th>
                    <th className="px-4 py-2 text-center font-semibold">Singly Circular</th>
                    <th className="px-4 py-2 text-center font-semibold">Doubly</th>
                    <th className="px-4 py-2 text-center font-semibold">Doubly Circular</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-t border-gray-500 bg-gray-50 hover:bg-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">Insert at Beginning</td>
                    <td className="px-4 py-3 text-center">O(1)</td>
                    <td className="px-4 py-3 text-center">O(1)</td>
                    <td className="px-4 py-3 text-center">O(1)</td>
                    <td className="px-4 py-3 text-center">O(1)</td>
                </tr>
                <tr className="border-t border-gray-500 bg-white hover:bg-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">Insert at End</td>
                    <td className="px-4 py-3 text-center">O(n)</td>
                    <td className="px-4 py-3 text-center">O(n)</td>
                    <td className="px-4 py-3 text-center">O(n)</td>
                    <td className="px-4 py-3 text-center">O(1)</td>
                </tr>
                <tr className="border-t border-gray-500 bg-gray-50 hover:bg-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">Insert at Middle</td>
                    <td className="px-4 py-3 text-center">O(n)</td>
                    <td className="px-4 py-3 text-center">O(n)</td>
                    <td className="px-4 py-3 text-center">O(n)</td>
                    <td className="px-4 py-3 text-center">O(n)</td>
                </tr>
                <tr className="border-t border-gray-500 bg-white hover:bg-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">Delete at Beginning</td>
                    <td className="px-4 py-3 text-center">O(1)</td>
                    <td className="px-4 py-3 text-center">O(1)</td>
                    <td className="px-4 py-3 text-center">O(1)</td>
                    <td className="px-4 py-3 text-center">O(1)</td>
                </tr>
                <tr className="border-t border-gray-500 bg-gray-50 hover:bg-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">Delete at End</td>
                    <td className="px-4 py-3 text-center">O(n)</td>
                    <td className="px-4 py-3 text-center">O(n)</td>
                    <td className="px-4 py-3 text-center">O(n)</td>
                    <td className="px-4 py-3 text-center">O(1)</td>
                </tr>
                <tr className="border-t border-gray-500 bg-white hover:bg-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">Search</td>
                    <td className="px-4 py-3 text-center">O(n)</td>
                    <td className="px-4 py-3 text-center">O(n)</td>
                    <td className="px-4 py-3 text-center">O(n)</td>
                    <td className="px-4 py-3 text-center">O(n)</td>
                </tr>
                <tr className="border-t border-gray-500 bg-gray-50 hover:bg-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-800">Reverse</td>
                    <td className="px-4 py-3 text-center">O(n)</td>
                    <td className="px-4 py-3 text-center">O(n)</td>
                    <td className="px-4 py-3 text-center">O(n)</td>
                    <td className="px-4 py-3 text-center">O(n)</td>
                </tr>
                </tbody>
            </table>
        </div>


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

        <Box minH='100vh' bg="#0f0a19" color="gray.500" px={2} py={8}>
            <CodeEditor/>
        </Box>
    </div>


</div>

    );
};

export default LinkedList;