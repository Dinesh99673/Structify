import React, { useState } from 'react';

const StackUsingLinkedList = () => {
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    // Function to Push Element into Stack
    const handlePush = () => {
        if (inputValue.trim() === "") return;
        const newNode = { data: inputValue, next: null };
        setList([newNode,...list]);
        setInputValue("");  // Clear input field after adding
    };

    // Function to  Pop node from Stack
    const handlePop = () => {
        if(list.length==0){
            alert("Stack is Empty (Stack Underflow)")
            return;
        }
        let temp = list[0].data;
        setList(list.slice(1,list.length));
        alert(temp+" Element is Poped");
    };

    // Function to get StackTop
    const handleStackTop = () => {
        if(list.length==0){
            alert("Stack is Empty (Stack Underflow)")
            return;
        }
        alert("Top Element is "+list[0].data);
    };

    return (
        <div className="p-4 md:p-4 text-cyan-300 flex flex-col items-center">
            <h1 className="text-title text-2xl md:text-4xl font-bold font-serif text-center">Stack using Linked List Visualizer</h1>
            
            {/* Input and Buttons */}
            <div className="mt-6 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full max-w-md">
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter value"
                    className="px-4 py-2 border rounded-lg text-gray-900 w-full"
                />
                <button onClick={handlePush} className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-gray-950 w-full md:w-auto">Push</button>
                <button onClick={handlePop} className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-gray-950 w-full md:w-auto">Pop</button>
                <button onClick={handleStackTop} className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-gray-950 w-full md:w-auto">StackTop</button>
            </div>

            {/*Stack Using Linked List Display */}
            <div className="flex flex-col place-items-center justify-center mt-6 md:gap-0 max-w-full">
            <h4 className="text-red-600 text-lg md:text-lg font-serif text-center">{list.length==0?"Empty Stack":"Stack Top"}</h4>
                {list.map((node, index) => (
                    
                    
                    index==0?(
                        <React.Fragment key={index}>
                            <div className="bg-gray-800 p-0 md:p-0 rounded-lg shadow-lg flex flex-row items-center w-25 sm:w-32">
                                <div className='w-[50%] px-2 h-8 border-blue-500 border-4 place-items-center rounded-md'><p className="text-sm md:text-base">{node.data}</p></div>
                                <div className='w-[50%] px-2 h-8 border-red-500 border-4 place-items-center rounded-md'><p className="text-sm md:text-base">{index === list.length - 1 ? 'Null' : 'Next'}</p></div>
                            </div>
                            {index < list.length - 1 && (
                                <span className="text-orange-500 text-2xl md:text-4xl font-bold">↓</span>
                            )}
                        </React.Fragment>
                    )
                    :(
                    <React.Fragment key={index}>
                        <div className="bg-gray-800 rounded-lg shadow-lg flex flex-row items-center w-25 sm:w-32">
                            <div className='w-[50%] h-8 border-blue-500 border-2 place-items-center rounded-md'><p className="text-sm md:text-base">{node.data}</p></div>
                            <div className='w-[50%] h-8 border-red-500 border-2 place-items-center rounded-md'><p className="text-sm md:text-base">{index === list.length - 1 ? 'Null' : 'Next'}</p></div>
                        </div>
                        {index < list.length - 1 && (
                            <span className="text-orange-500 text-2xl md:text-4xl font-bold">↓</span>
                        )}
                    </React.Fragment>
                    )
                ))}
            </div>
        </div>
    );
};

export default StackUsingLinkedList;
