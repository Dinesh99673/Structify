import React from 'react';
import { QueueData} from '../Services/Data';

const Queue = () => {


    return (
<div className="p-10 max-w-full text-[#E0E0E0] flex flex-col lg:flex-row gap-10 items-start z-10 mt-10 text-justify">
    {/* Text Content */}
    <div className="flex-1 justify-center w-full lg:w-[60%]">
        <h1 className="text-btn-lnk text-5xl font-bold font-serif text-center lg:text-start ">{QueueData.title}</h1>
        <p className="mt-4 max-w-full text-1xl md:text-2xl text-justify text-sec-text">
            <span className="text-3xl font-semibold text-pri-text">Overview : </span>{QueueData.overview}</p>

        {/*All Theory part is being displayed by this Fragment */}
        {
            QueueData.subContent.map((data,index)=>(
                <React.Fragment key={index}>
                    <h2 className="text-title text-2xl font-bold mt-6">{data.title}</h2>
                    <ul className="list-disc ml-5 mt-2 text-lg text-sec-text md:text-xl" >
                        {
                            data.content.map((item,index)=>(
                                <li key={index}><span className="text-xl font-semibold text-pri-text ">{item[0]} :</span> {item[1]}</li>
                            ))
                        }
                    </ul>
                </React.Fragment>
            ))
        }
    </div>
</div>

    );
};

export default Queue;
