import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import CodeEditor from '../code/CodeEditor';
import StackUsingArray from '../Stack/StackUsingArray';
import StackUsingLinkedList from '../Stack/StackUsingLinkedList';

const StackVisulaizer = ()=>{
    
    const [Choice,setChoice] = useState(0);

    return (
        <div className="w-full text-[#E0E0E0] flex flex-col gap-10 items-center z-10 mt-10 px-4">
        <h2 className="text-cyan-400 font-bold text-4xl mt-6 text-center">
            Implementation of Stack using
        </h2>
        <div className="mt-2 flex flex-col justify-center items-center md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full max-w-md">
          <button
            onClick={() => setChoice(0)}
            className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-[#121212] w-full md:w-auto font-semibold"
          >
            Array
          </button>
          <button
            onClick={() => setChoice(1)}
            className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-[#121212] w-full md:w-auto font-semibold"
          >
            Linked List
          </button>
        </div>
        <div className="w-full max-w-4xl">
            {Choice==0 && <StackUsingArray/>        }       
            {Choice==1 && <StackUsingLinkedList/>        }
        </div>
  
        <Box
          minH="100vh"
          bg="#0f0a19"
          color="gray.500"
          px={4}
          py={8}
          w="100%"
          maxWidth="1280px"
          mx="auto"
          borderRadius="lg"
        >
          <CodeEditor />
        </Box>
      </div>          
    );
}

export default StackVisulaizer;