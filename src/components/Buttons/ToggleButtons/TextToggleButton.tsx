import React, { createRef, useEffect, useRef } from "react";
import { isTemplateExpression } from "typescript";

interface TextToggleButtonProps {
    value?: any;
    setToggleValue: React.Dispatch<React.SetStateAction<any>>;
    data: any[];
}

export function TextToggleButton({value, setToggleValue, data}: TextToggleButtonProps) {
    type dataType = typeof data;    
    const refs = useRef<dataType>(data.map(() => createRef()));
    
    useEffect(() => {
        setToggleValue(data[0].id);
    }, []);

    return(
        <div className="flex flex-row w-full font-bold gap-2.5">
            {data.map((item, index) =>
                <div ref={refs.current[index]} key={item.id} id={item.id} className={`transition duration-150 ease-in-out w-full py-2.5 items-center flex justify-center cursor-pointer hover:opacity-75 active:opacity-50 rounded-xl`}
                    style={{
                        background: `${value === refs.current[index]?.current?.id ? "linear-gradient(93.82deg, #1D63B8 0%, #DE1B3B 100%)" : "rgba(0, 0, 0, 0.1)"}`
                    }}
                    onClick={(event) => {
                        if (value !== refs.current[index]?.current.id){
                            setToggleValue(event.currentTarget.id);
                        }
                    }}>
                    <label className="cursor-pointer">{item.name}</label>
                </div>
            )}
        </div>
    );
}