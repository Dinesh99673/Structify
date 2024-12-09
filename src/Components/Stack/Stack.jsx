import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import CodeEditor from '../code/CodeEditor';
import { StackData } from '../Services/Data';
import StackUsingArray from './StackUsingArray';
import StackUsingLinkedList from './StackUsingLinkedList';

const Stack = () => {

    const [Choice, setChoice] = useState(0);


    return (
<div className="p-10 max-w-full text-[#E0E0E0] flex flex-col lg:flex-row gap-10 items-start z-10 mt-10">
    {/* Text Content */}
    <div className="flex-1 justify-center w-full lg:w-[60%]">
        <h1 className="text-btn-lnk text-5xl font-bold font-serif text-center lg:text-start ">{StackData.title}</h1>
        <p className="mt-4 max-w-full text-1xl md:text-2xl text-justify text-sec-text">
            <span className="text-3xl font-semibold text-pri-text">Overview : </span>{StackData.overview}</p>

        <h2 className="text-title text-2xl font-bold mt-6">Key Features of a Linked List</h2>
        <ul className="list-disc ml-5 mt-2 text-lg text-sec-text md:text-xl" >
            {StackData.features.map((data,index)=>(
                <li key={index}><span className="text-xl font-semibold text-pri-text">{data[0]} :</span> {data[1]}</li>
            ))}
        </ul>

        <h2 className="text-title text-2xl font-bold mt-6">Types of Linked List</h2>
        <ul className="list-disc ml-5 mt-2 text-lg text-sec-text md:text-xl" >
        {StackData.types.map((data,index)=>(
            <li key={index}><span className="text-xl font-semibold text-pri-text">{data[0]} :</span> {data[1]}</li>
            ))}
        </ul>

        <h2 className="text-title text-2xl font-bold mt-6">Applications and Real-World Examples of Linked List</h2>
        <ul className="list-disc ml-5 mt-2 text-lg text-sec-text md:text-xl" >
        {StackData.applications.map((data,index)=>(
            <li key={index}><span className="text-xl font-semibold text-pri-text">{data[0]} :</span> {data[1]}</li>
            ))}
        </ul>


        <h2 className="text-title text-2xl font-bold mt-6">Advantages of Stacks</h2>
        <ul className="list-disc ml-5 mt-2 text-lg text-sec-text md:text-xl" >
        {StackData.advantages.map((data,index)=>(
            <li key={index}><span className="text-xl font-semibold text-pri-text">{data[0]} :</span> {data[1]}</li>
            ))}
        </ul>

        <h2 className="text-title text-2xl font-bold mt-6">Disadvantages of Stacks</h2>
        <ul className="list-disc ml-5 mt-2 text-lg text-sec-text md:text-xl" >
        {StackData.drawbacks.map((data,index)=>(
            <li key={index}><span className="text-xl font-semibold text-pri-text">{data[0]} :</span> {data[1]}</li>
            ))}
        </ul>


        <h2 className="text-cyan-400 font-bold text-2xl mt-6">Implementation of Stack using : </h2>
        <div className="mt-6 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full max-w-xl">
            <button onClick={() => setChoice(0)} className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-[#121212] w-full md:w-auto font-semibold">Array</button>
            <button onClick={() => setChoice(1)} className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-[#121212] w-full md:w-auto font-semibold">Linked List</button>
        </div>

        {Choice==0 && <StackUsingArray/>        }       
        {Choice==1 && <StackUsingLinkedList/>        }
        <Box minH='100vh' bg="#0f0a19" color="gray.500" px={2} py={8}>
            <CodeEditor/>
        </Box>
    </div>


</div>

    );
};

export default Stack;
