import { useState } from "react";
import { Icons } from "./IconsEnum";

export function HumburgerMenu() {
    let [icon, toggleIcon] = useState(Icons.HUMBURGER);
    
    return(
        <img src={"/assets/" + icon + ".svg"} className="w-8 h-8 mx-5 my-2.5 cursor-pointer brightness-0 invert hover:opacity-75 active:opacity-50" alt="" 
            onClick={() => {
                if (icon === Icons.HUMBURGER) {
                    toggleIcon(Icons.HUMBURGER_SHORT);
                } else {
                    toggleIcon(Icons.HUMBURGER);
                }
        }}/>

    );
}