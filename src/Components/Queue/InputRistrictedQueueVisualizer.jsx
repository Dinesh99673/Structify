import React, { useState } from "react";

const InputRistrictedQueueVisualizer = () => {
    const QueueSize = 10;
    const [inputValue, setInputValue] = useState("");
    const [Front, setFront] = useState(0);
    const [Rear, setRear] = useState(0);
    const [list, setList] = useState(() => {
        let temp = [];
        for (let i = 0; i < QueueSize; i++) {
            temp[i] = "";
        }
        return temp;
    });
    const [length, setLength] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    // Function to Pop node from Front
    const handleDeQueueFromFirst = () => {
        if (length === 0) {
            alert("Queue is Empty (Queue Underflow)");
            return;
        }
        let newElement = [...list];
        alert(list[Front] + " Element is Popped");
        newElement[Front] = "";
        setLength(length - 1);
        setFront((Front + 1) % QueueSize);
        setList(newElement);
    };

    // Function to Pop node from Rear
    const handleDeQueueFromLast = () => {
        if (length === 0) {
            alert("Queue is Empty (Queue Underflow)");
            return;
        }
        let newElement = [...list];
        let newRear = (Rear - 1 + QueueSize) % QueueSize;
        alert(list[newRear] + " Element is Popped");
        newElement[newRear] = "";
        setLength(length - 1);
        setRear(newRear);
        setList(newElement);
    };

    // Function to Push Element into Queue
    const handleEnQueue = () => {
        if (inputValue.trim() === "") return;
        if (length === QueueSize) {
            alert("Queue is Full (Queue Overflow)");
            setInputValue("");
            return;
        }
        let newElement = [...list];
        newElement[Rear] = inputValue;
        setRear((Rear + 1) % QueueSize);
        setList(newElement);
        setLength(length + 1);
        setInputValue(""); // Clear input field after adding
    };

    return (
        <div className="p-4 md:p-4 text-cyan-300 flex flex-col items-center">
            <h1 className="text-title text-2xl md:text-4xl font-bold font-serif text-center">Input-Restricted Queue using Array Visualizer</h1>
            <h4 className="text-red-600 text-lg md:text-lg font-serif text-center">Maximum size of Queue is 10</h4>

            {/* Input and Buttons */}
            <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full max-w-lg">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter value"
                    className="px-4 py-2 border rounded-lg text-gray-900 w-full"
                />
                <button onClick={handleEnQueue} className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-gray-950 w-full md:w-auto">Enqueue</button>

                {/* Menu Button */}
                <div className="relative">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-gray-950 w-full md:w-auto"
                    >
                        DeQueue
                    </button>
                    {showMenu && (
                        <div className="absolute bg-gray-900 rounded-2xl mt-2 shadow-lg">
                            <button
                                onClick={() => {
                                    handleDeQueueFromFirst();
                                    setShowMenu(false);
                                }}
                                className="block px-2 py-2 text-left rounded-xl hover:bg-cyan-400 w-full text-gray-300 hover:text-black"
                            >
                                From Front
                            </button>
                            <button
                                onClick={() => {
                                    handleDeQueueFromLast();
                                    setShowMenu(false);
                                }}
                                className="block px-2 py-2 text-left rounded-xl hover:bg-cyan-400 w-full text-gray-300 hover:text-black"
                            >
                                From Rear
                            </button>
                        </div>
                    )}
                </div>

                <button onClick={() => Front === Rear ? alert("Queue is Empty") : alert("Front element is " + list[Front])} className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-gray-950 w-full md:w-auto">Front</button>
                <button onClick={() => Front === Rear ? alert("Queue is Empty") : alert("Rear element is " + list[(Rear - 1 + QueueSize) % QueueSize])} className="px-4 py-2 bg-btn-lnk rounded-lg hover:bg-cyan-400 text-gray-950 w-full md:w-auto">Rear</button>
            </div>

            {/* Queue Using Array Display */}
            <div className="flex flex-row gap-3 mt-5 ">
                <div className='w-[100%] px-2 h-8 border-green-500 border-4 place-items-center rounded-md'><p className="text-sm md:text-base">Front</p></div>
                <div className='w-[100%] px-2 h-8 border-red-600 border-4 place-items-center rounded-md'><p className="text-sm md:text-base">Rear</p></div>
            </div>
            <h4 className="text-red-600 text-lg md:text-lg font-serif text-center mt-3">{length === 0 && "Empty Queue"}</h4>
            <div className="flex flex-row place-items-center justify-center mt-3 gap-0 md:gap-0 max-w-full">
                {list.map((node, index) => (
                    <React.Fragment key={index}>
                        {(Rear) === ((index + 1) % QueueSize) ?
                            (<div className="bg-gray-800 p-0 md:p-0 rounded-lg mt-0 shadow-lg flex flex-row items-center w-12 sm:w-16">
                                <div className={`w-[100%] px-2 h-8 ${length === 0 ? 'border-blue-500 border-2' : 'border-red-600 border-4'} place-items-center rounded-md`}><p className="text-sm md:text-base">{node}</p></div>
                            </div>)
                            : (<div className="bg-gray-800 p-0 md:p-0 rounded-lg mt-0 shadow-lg flex flex-row items-center w-12 sm:w-16">
                                <div className={`w-[100%] px-2 h-8 ${Front === index ? (length === 0 ? 'border-blue-500 border-2' : 'border-green-500 border-4') : 'border-blue-500 border-2'} place-items-center rounded-md`}><p className="text-sm md:text-base">{node}</p></div>
                            </div>)}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default InputRistrictedQueueVisualizer;
