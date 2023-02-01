import React from "react";
import { TextInputType } from "./TextInputType";

interface TextInputProps {
    placeholder?: string;
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    error?: string;
    type: TextInputType;
}

export function TextInput({  placeholder, value, setValue, error, type }: TextInputProps) {    
    return(
        <div className="flex flex-col gap-1.5 w-full justify-center items-center">
            <input value={value} className={`transition duration-150 ease-in-out w-full bg-transparent px-5 py-2.5 rounded-3xl ${error && "border-[#E94560]"} focus:border-[#0073FF]/75 outline-none border-2`} 
            type={type} placeholder={placeholder} onChange={(event) => setValue && setValue(event.target.value)}/>
            {error && <span className="font-regular text-sm text-center text-[#E94560]">{error}</span>}
        </div>
    );
}