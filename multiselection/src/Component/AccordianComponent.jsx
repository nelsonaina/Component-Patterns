import { use, useState } from "react";
import data from "../services/index.js";

function AccordianComponent() {
    const [selected, setSelected] = useState(null);
    const [enableMulti, setEnableMulti] = useState(false);
    const [multiple, setMultiple] = useState([]);
    

    function handleMultipleSelection(currentItem) {
        
        let copyMultiple = [...multiple];
        const getIndexOfCurrentItem = copyMultiple.indexOf(currentItem);

        console.log(getIndexOfCurrentItem);
        if (getIndexOfCurrentItem === -1) {
            copyMultiple.push(currentItem);
        }
        else {
            copyMultiple.splice(getIndexOfCurrentItem, 1);
        }

        setMultiple(copyMultiple);
    }

    function handleSelected(currentItem) {
        console.log(currentItem);
        setSelected(currentItem === selected ? null : currentItem);
    }
    return (
        <>
            <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-gray-200 grid ">
                <button onClick={()=> setEnableMulti(!enableMulti)} className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition justify-center">
                    Enable Multi Selection
                </button>
                <div className="space-y-4">
                    {data && data.length > 0 ? (
                        data.map((item) => (
                            <div
                                key={item.id}
                                onClick={ enableMulti ? ()=>  handleMultipleSelection(item.id) : ()=> handleSelected(item.id)}
                                className={`cursor-pointer border rounded-lg transition shadow-sm ${selected === item.id ? "bg-blue-50 border-blue-400" : "bg-gray-50 border-gray-200"} hover:shadow-md`}
                            >
                                <div className="flex items-center justify-between p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {item.question}
                                    </h3>
                                    <span
                                        className={`text-2xl font-bold transition-transform duration-200 ${selected === item.id ? "rotate-45 text-blue-600" : "text-gray-400"}`}
                                    >
                                        +
                                    </span>
                                </div>
                                { enableMulti 
                                    ?
                                    multiple.indexOf(item.id) !== -1 && 
                                    <div className="px-4 pb-4 text-gray-700 animate-fade-in">
                                        {item.answer}
                                    </div> 
                                    : 
                                    selected === item.id &&  
                                    <div className="px-4 pb-4 text-gray-700 animate-fade-in">
                                        {item.answer}
                                    </div>
                                }
                                {/* {selected === item.id ? (
                                    <div className="px-4 pb-4 text-gray-700 animate-fade-in">
                                        {item.answer}
                                    </div>
                                ) : null} */}
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-500">
                            No data available at the moment
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default AccordianComponent;
