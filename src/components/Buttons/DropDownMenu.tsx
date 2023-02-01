import { useState } from "react";
import { Icons } from "../IconsEnum";

interface DropDownMenuProps {
    data: {
        id: number;
        text: string;
    }[];
}

export function DropDownMenu({data}: DropDownMenuProps) {
    
    const [selected, selectCategory] = useState(data[0].id);

    function getTextExpression(id: number){
        return data.find((cat) => cat.id === id)?.text;
    }
    const [selectedText, changeText] = useState(getTextExpression(selected));
    const [dropState, changeState] = useState(false);

    return(
        <div className="h-full w-fit relative">
            <div className="h-full flex flex-row gap-2.5 items-center hover:opacity-75 active:opacity-50 cursor-pointer" 
                onClick={() => changeState(!dropState)}>
                <label className="cursor-pointer">{selectedText}</label>
                <img src={`/assets/${Icons.DOWN}.svg`} className={`brightness-0 invert w-4 cursor-pointer ${dropState && "rotate-180"}`}></img>
            </div>
            <div className={`absolute right-0.5 rounded-3xl px-2.5 py-2.5 z-50 bg-black/30 border-white border top-12 whitespace-nowrap 
                ${!dropState && "hidden"}`} style={{
                boxShadow: '0px 0px 2px rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(2.5px)'
            }}>
                <ul>
                    {data.map((category) => 
                        <li id={category.id.toString()} key={category.id} className={`rounded-3xl px-2.5 py-0.5 hover:text-white/75 active:text-white/50
                            ${selected === category.id && "bg-[#DE1B3B]"} cursor-pointer`}
                            onClick={(e) => {                                        
                                if(e.currentTarget.id !== selected.toString()){
                                    selectCategory(parseInt(e.currentTarget.id));
                                    changeText(getTextExpression(parseInt(e.currentTarget.id)));
                                    changeState(false);
                                }
                            }}>{category.text}</li>)
                    }
                </ul>
            </div>
        </div>
    );
}