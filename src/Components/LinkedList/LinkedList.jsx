import React, { useState } from 'react';
import LinkedListBlock from './SinglyLLDemo';
import LinkedListImage from '../../assets/LinkedList3.drawio.png'; // Adjust this path as needed
import CircularLLBlock from './CircularLLDemo';
import DoublyLLBlock from './DoublyLLDemo';

const LinkedList = () => {
    const [Choice,setChoice] = useState(0);
    const Future = ()=>{
        alert("Not done yet");
    }
    return (
        <div className="p-10 text-cyan-300 flex flex-col lg:flex-row gap-10 items-start">
            {/* Text Content */}
            <div className="flex-1">
                <h1 className="text-orange-500 text-4xl font-bold">Linked List</h1>
                <p className="mt-4 max-w-full  w-[60%]">
                    A Linked List is a linear data structure in which elements are not stored in contiguous memory locations.
                    Instead, they are connected using pointers. Each node contains data and a reference to the next node.
                </p>

                <h2 className="text-orange-500 text-2xl mt-6">Properties of Linked List</h2>
                <ul className="list-disc ml-5 mt-2 text-lg">
                    <li><span className='font-bold'>Data Structure : </span>Non-contiguous</li>
                    <li><span className='font-bold'>Memory Allocation : </span>Typically allocated one by one to individual elements</li>
                    <li><span className='font-bold'>Insertion/Deletion : </span>Efficient</li>
                    <li><span className='font-bold'>Access : </span>Sequential</li>

                </ul>

                <h2 className="text-orange-500 text-2xl mt-6">Operations</h2>
                <ul className="list-disc ml-5 mt-2 text-lg">
                    <li>Insertion</li>
                    <li>Deletion</li>
                    <li>Traversal</li>
                    <li>Searching</li>
                    <li>Sorting</li>
                    <li>Merging</li>
                </ul>

                <h2 className="text-orange-500 text-2xl mt-6 ">Time Complexity</h2>
                <p className='text-xl font-bold mt-2'>Insertion : O(1), Deletion : O(1), Search : O(n)</p>
                <div className="flex-1 flex justify-center mt-6">
                    <img 
                        src={LinkedListImage} 
                        alt="Linked List Visual" 
                        className="w-full max-w-md lg:max-w-2xl object-contain mt-[20px] mb-6" 
                    />
                </div>
                <h2 className="text-orange-500 text-2xl mt-6 ">Node Structure </h2>
                <p className='text-xl mt-2'> A node in a linked list typically consists of two components : </p>
                <p className='text-xl mt-2'><span className='font-bold text-orange-500 '>Data : </span>It holds the actual value or data associated with the node.</p>
                <p className='text-xl mt-2'><span className='font-bold text-orange-500 '>Next Pointer or Reference : </span>It stores the memory address (reference) of the next node in the sequence.</p>
                
                <h2 className="text-orange-500 text-2xl mt-6">Types of Linked Lists</h2>
                <div className="mt-6 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full max-w-xl">
                    <button onClick={()=>setChoice(0)} className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-400 w-full md:w-auto">Singly Linked List</button>
                    <button onClick={()=>setChoice(1)} className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-400 w-full md:w-auto">Singly Circular Linked List</button>
                    <button onClick={()=>setChoice(2)} className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-400 w-full md:w-auto">Doubly Linked List</button>
                    <button onClick={()=>setChoice(3)} className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-400 w-full md:w-auto">Double Circular Linked List</button>
                </div>
                {
                    Choice==0 && <LinkedListBlock/>
                }
                {
                    Choice==1 && <CircularLLBlock/>
                }
                {
                   Choice==2 && <DoublyLLBlock/>
                }
                {
                    //Choice==3 &&  <DoublyCircularLLBlock/>
                }
                
            </div>
        </div>
    );
};

export default LinkedList;
