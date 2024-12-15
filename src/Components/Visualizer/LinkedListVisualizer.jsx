import React, { useState } from "react";
import LinkedListBlock from "../LinkedList/SinglyLLDemo";
import CircularLLBlock from "../LinkedList/CircularLLDemo";
import DoublyCircularLLBlock from "../LinkedList/DoublyCircularLLDemo";
import DoublyLLBlock from "../LinkedList/DoublyLLDemo";
import CodeEditor from "../code/CodeEditor";
import { Box } from "@chakra-ui/react";

const LinkedListVisualizer = () => {
  const [Choice, setChoice] = useState(0);

  return (
    <div className="w-full text-[#E0E0E0] flex flex-col gap-10 items-center z-10 mt-10 px-4">
      <h2 className="text-cyan-400 font-bold text-4xl mt-6 text-center">
        Types of Linked Lists
      </h2>
      <div className="mt-2 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 md:max-w-4xl w-full max-w-md">
        <button
          onClick={() => setChoice(0)}
          className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-[#121212] w-full md:w-auto font-semibold"
        >
          Singly Linked List
        </button>
        <button
          onClick={() => setChoice(1)}
          className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-[#121212] w-full md:w-auto font-semibold"
        >
          Singly Circular Linked List
        </button>
        <button
          onClick={() => setChoice(2)}
          className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-[#121212] w-full md:w-auto font-semibold"
        >
          Doubly Linked List
        </button>
        <button
          onClick={() => setChoice(3)}
          className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-[#121212] w-full md:w-auto font-semibold"
        >
          Double Circular Linked List
        </button>
      </div>
      <div className="w-full max-w-4xl">
        {Choice === 0 && <LinkedListBlock />}
        {Choice === 1 && <CircularLLBlock />}
        {Choice === 2 && <DoublyLLBlock />}
        {Choice === 3 && <DoublyCircularLLBlock />}
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
};

export default LinkedListVisualizer;
