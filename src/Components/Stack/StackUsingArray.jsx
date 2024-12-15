import React,{useState} from "react";

const StackUsingArray = () =>{

    const stackSize = 10;
    const [inputValue,setInputValue] = useState("");
    const [list,setList] = useState(()=>{
        let temp = [];
        for(let i = 0;i<stackSize;i++){
            temp[i]="";
        }
        return temp;
    });
    const [length,setLength] = useState(stackSize);

    // Function to  Pop node from Stack
    const handlePop = ()=>{
        if(length==stackSize){
            alert("Stack is Empty (Stack Underflow)")
            return;
        }
        let newElement = [...list];
        alert(list[length]+" Element is Poped");
        newElement[length] = "";
        setLength(length+1);
        setList(newElement);
    }
 
    // Function to Push Element into Stack
    const handlePush = ()=>{
        if (inputValue.trim() === "") return;
        if(length<=0){ 
            alert("Stack is Full (Stack Overflow)" );
            setInputValue("");
            return;
        }
        let newElement = [...list];
        newElement[length-1] = inputValue;
        setLength(length-1);
        setList(newElement);
        setInputValue("");  // Clear input field after adding
    }

    // Function to get StackTop
    const handleStackTop = ()=>{
        if(length==stackSize){
            alert("Stack is Empty (Stack Underflow)")
            return;
        }
        alert("Top Element is "+list[length]);
    }


    return (
        <div className="p-4 md:p-4 text-cyan-300 flex flex-col items-center">
            <h1 className="text-title text-2xl md:text-4xl font-bold font-serif text-center">Stack using Array Visualizer</h1>
            <h4 className="text-red-600 text-lg md:text-lg font-serif text-center">Maximum size of Stack is 10</h4>
            
            {/* Input and Buttons */}
            <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full max-w-md">
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

            {/* Stack Using Array Display */}
            <div className="flex flex-col place-items-center justify-center mt-8 gap-0 md:gap-0 max-w-full">
            <h4 className="text-red-600 text-lg md:text-lg font-serif text-center mb-3">{length==stackSize&&"Empty Stack"}</h4>
                {list.map((node, index) => (
                    <React.Fragment key={index}>
                        {length==index?
                        (   <div className="bg-gray-800 p-0 md:p-0 rounded-lg mt-0 shadow-lg flex flex-row items-center w-12 sm:w-16">
                                <div className='w-[100%] px-2 h-8 border-red-600 border-4 place-items-center rounded-md'><p className="text-sm md:text-base">{node}</p></div>
                            </div>
                        )
                        :(
                            <div className="bg-gray-800 p-0 md:p-0 rounded-lg mt-0 shadow-lg flex flex-row items-center w-12 sm:w-16">
                                <div className='w-[100%] px-2 h-8 border-blue-500 border-x-2 border-y-2 place-items-center rounded-md'><p className="text-sm md:text-base">{node}</p></div>
                            </div>
                        )}
                    </React.Fragment>
            ))}
            </div>
        </div>
    );
}

export default StackUsingArray;