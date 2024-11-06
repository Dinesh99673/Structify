import React,{useState} from "react";

function DoublyLLBlock(){
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    // Function to add a node to the end of the linked list
    const handleAdd = () => {
        if (inputValue.trim() === "") return;
        const newNode = { data: inputValue, next: null };
        setList([...list, newNode]);
        setInputValue("");  // Clear input field after adding
    };

    // Function to delete the last node in the linked list
    const handleDelete = () => {
        setList(list.slice(0, -1));
    };

    // Placeholder functions for Search and Sort
    const handleSearch = () => {
        alert("Search functionality coming soon!");
    };

    const handleSort = () => {
        const sortedList = [...list].sort((a, b) => a.data - b.data);
        setList(sortedList);
    };

    return (
        <div className="p-4 md:p-10 text-cyan-300 flex flex-col items-center">
            <h1 className="text-orange-500 text-2xl md:text-4xl font-bold text-center">Doubly Linked List Visualizer</h1>
            
            {/* Input and Buttons */}
            <div className="mt-6 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full max-w-md">
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter value"
                    className="px-4 py-2 border rounded-lg text-gray-900 w-full"
                />
                <button onClick={handleAdd} className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-400 w-full md:w-auto">Add</button>
                <button onClick={handleDelete} className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-400 w-full md:w-auto">Delete</button>
                <button onClick={handleSearch} className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-400 w-full md:w-auto">Search</button>
                <button onClick={handleSort} className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-400 w-full md:w-auto">Sort</button>
            </div>

            {/* Linked List Display */}
            <div className="flex flex-wrap place-items-center justify-center mt-10 gap-0 md:gap-0 max-w-full">
                {list.map((node, index) => (
                    <React.Fragment key={index}>
                        <div className="bg-gray-800 p-0 md:p-0 rounded-lg mt-3 shadow-lg flex flex-row items-center w-27 sm:w-34">
                            <div className='w-[60%] px-2 h-8 border-red-500 border-x-2 border-y-2 place-items-center rounded-md'><p className="text-sm md:text-base">{index === 0 ? 'Null' : 'Prev'}</p></div>
                            <div className='w-[60%] px-2 h-8 border-blue-500 border-x-2 border-y-2 place-items-center rounded-md'><p className="text-sm md:text-base">{node.data}</p></div>
                            <div className='w-[60%] px-2 h-8 border-red-500 border-x-2 border-y-2 place-items-center rounded-md'><p className="text-sm md:text-base">{index === list.length - 1 ? 'Null' : 'Next'}</p></div>
                        </div>
                        {index < list.length - 1 && (
                            <span className="text-orange-500 text-2xl md:text-4xl font-bold">↔</span>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default DoublyLLBlock;