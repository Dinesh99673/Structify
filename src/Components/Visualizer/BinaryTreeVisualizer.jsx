import React,{useState} from "react";
import { BinaryTreeData } from "../Services/Data";
import { Box } from '@chakra-ui/react';
import CodeEditor from '../code/CodeEditor';
import BinarySearchTreeVisualizer from "../BinaryTree/BinarySearchTreeVisualizer";

const BinaryTreeVisualizer = ()=>{
    const [Choice,setChoice] = useState(0);
    const TreeTypes = ["Binary Search Tree"];

    return (
        <div className="w-full text-[#E0E0E0] flex flex-col gap-10 items-center z-10 mt-10 px-4">
        <h2 className="text-cyan-400 font-bold text-4xl mt-6 text-center">
            Types of Binary Trees
        </h2>
        <div className="mt-2 flex flex-col justify-center items-center md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full">
          {
            TreeTypes.map((type,index)=>{
                return (
                    <button
                    key={index}
                    onClick={() => setChoice(index)}
                    className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-[#121212] w-full md:w-auto font-semibold"
                  >
                    {type}
                  </button>        
                )
            })
          }
        </div>
        <div className="w-full max-w-4xl">
            {Choice==0 && <BinarySearchTreeVisualizer/ >   }      
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

export default BinaryTreeVisualizer;