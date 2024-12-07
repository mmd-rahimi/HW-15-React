import { useState } from "react";

export function CounterFoodBtn (){
    const [number, setNumber] = useState(0);

    function click(){
        setNumber(number => number + 1)
    }
    return(
        <>
        <div className="flex flex-row-reverse justify-center items-center gap-2 w-[5rem] h-6 border-2">
            <button className="bg-orange-500 w-8 rounded-md flex justify-center" 
            onClick={() => {click()}}>+</button>
            <div> {number} </div>
            <button className="bg-gray-400 w-8 rounded-md flex justify-center" 
            onClick={() => setNumber(number-1)}>-</button>  
        </div>
        </>
    )
}