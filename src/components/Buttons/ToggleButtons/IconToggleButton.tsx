import { useState } from "react";
import { Icons } from "../../IconsEnum";

interface IconToggleButtonProps {
    firstIcon: Icons;
    secondIcon: Icons;
    isSecondSelected?:  boolean;
}

export function IconToggleButton({firstIcon, secondIcon, isSecondSelected}: IconToggleButtonProps) {
    const [state, changeState] = useState(isSecondSelected);

    return(
        <div className="flex flex-row">
            <img src={`/assets/${!state ? (firstIcon + '-active') as Icons : firstIcon}.svg`} 
                className={`w-11 h-11 cursor-pointer hover:opacity-75 active:opacity-50`} 
                alt="" onClick={() => {
                    if(state){
                        changeState(!state);
                    }
                }}/>
            <img src={`/assets/${state ? (secondIcon + '-active') as Icons : secondIcon}.svg`}
            className={`w-11 h-11 cursor-pointer hover:opacity-75 active:opacity-50`} 
                alt="" onClick={() => {
                    if(!state){
                        changeState(!state);
                    }
                }}/>
        </div>
    );
}