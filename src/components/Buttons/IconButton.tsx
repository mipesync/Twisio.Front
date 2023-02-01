import { useState } from "react";
import { Icons } from "../IconsEnum";

interface IconButtonProps {
    isSelected?: boolean;
    idleIcon: Icons;
    activeIcon?: Icons;
    className?: string;
}

export function IconButton({ isSelected, idleIcon, activeIcon, className }: IconButtonProps) {
    const [icon, toggleIcon] = useState(isSelected ? (activeIcon ? activeIcon : idleIcon) : idleIcon);
    const [state, toggleState] = useState(isSelected);    

    return(        
        <img src={`/assets/${icon}.svg`} className={`transition duration-150 ease-in-out w-6 h-6 cursor-pointer hover:opacity-75 active:opacity-50 ${className} ${state ? "" : "brightness-0 invert"}`} alt="" onClick={() => 
            {
                if (activeIcon) {
                    if (icon === idleIcon) {
                        toggleIcon(activeIcon);
                        toggleState(true);
                    } else {
                        toggleIcon(idleIcon);
                        toggleState(false);
                    }
                }
            }}/>
    );
}