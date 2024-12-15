import React, { useState } from 'react';
import LinkedListBlock from './SinglyLLDemo';
import LinkedListImage from '../../assets/LinkedList3.drawio.png'; 
import CircularLLBlock from './CircularLLDemo';
import DoublyLLBlock from './DoublyLLDemo';
import DoublyCircularLLBlock from './DoublyCircularLLDemo';
import { Box } from '@chakra-ui/react';
import CodeEditor from '../code/CodeEditor';
import { LinkedListData } from '../Services/Data';

const LinkedList = () => {
    const [Choice, setChoice] = useState(0);

    const Future = () => {
        alert("Not done yet");
    };

    return (
<div className="p-10 max-w-full text-[#E0E0E0] flex flex-col lg:flex-row gap-10 items-start z-10 mt-10 text-justify">
    {/* Text Content */}
    <div className="flex-1 justify-center w-full lg:w-[60%]">
        <h1 className="text-btn-lnk text-5xl font-bold font-serif text-center lg:text-start ">{LinkedListData.title}</h1>
        <p className="mt-4 max-w-full text-1xl md:text-2xl text-justify text-sec-text">
            <span className="text-3xl font-semibold text-pri-text">Overview : </span>{LinkedListData.overview}</p>

        <h2 className="text-title text-2xl font-bold mt-6">Key Features of a Linked List</h2>
        <ul className="list-disc ml-5 mt-2 text-lg text-sec-text md:text-xl" >
        <li><span className="text-xl font-semibold text-pri-text">Node-Based Structure : </span>
            Each element (node) contains two parts : 
                <ul>
                    <li><span className='font-semibold text-pri-text'>Data :</span> Stores the actual value.</li>
                    <li><span className='font-semibold text-pri-text'>Pointer :</span>  Stores the address of the next node.</li>
                </ul>
            </li>
            {LinkedListData.features.map((data,index)=>(
                <li key={index}><span className="text-xl font-semibold text-pri-text">{data[0]} :</span> {data[1]}</li>
            ))}
        </ul>

        {/*All Theory part is being displayed by this Fragment */}
        {
            LinkedListData.subContent.map((data,index)=>(
                <React.Fragment key={index}>
                    <h2 className="text-title text-2xl font-bold mt-6">{data.title}</h2>
                    <ul className="list-disc ml-5 mt-2 text-lg text-sec-text md:text-xl" >
                        {
                            data.content.map((item,index)=>(
                                <li key={index}><span className="text-xl font-semibold text-pri-text">{item[0]} :</span> {item[1]}</li>
                            ))
                        }
                    </ul>
                </React.Fragment>
            ))
        }


        <div className="overflow-x-auto w-full mx-auto  my-8 flex flex-col lg:flex-row gap-5">
            <div className='lg:w-[50%] w-full text-xs lg:text-lg '>
                <table className="w-full border-collapse border-gray-400 shadow-lg text-heading overflow-hidden rounded-xl">
                    <thead>
                        <tr className="bg-cyan-500 text-white">
                            <th className="px-6 py-3  text-center font-bold text-md md:text-lg" colSpan="5">Linked List Operations and Time Complexity</th>
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
            <div className='w-full lg:w-[50%]  flex-1 flex justify-center'>
                <img 
                    src={LinkedListImage} 
                    alt="Linked List Visual" 
                    className="  bg-gray-900 rounded-lg object-contain " 
                />
            </div>
        </div>
    </div>
</div>

    );
};

export default LinkedList;
