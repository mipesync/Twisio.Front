import { Icons } from "../../IconsEnum";
import { IconTextButtonStyle } from "./IconTextButton.style";

interface IconTextButtonProps {
    icon: Icons;
    text?: string;
    imgClasses?: string;
    classes?: string;
    textFirst?: boolean;
    style?: IconTextButtonStyle;
    src?: string;
}

export function IconTextButton(props: IconTextButtonProps) {
    const labelComponent = <label className="cursor-pointer whitespace-nowrap">{props.text}</label>;
    const iconComponent = <img src={`${!props.src ? `/assets/${props.icon}.svg` : props.src}`} className={props.imgClasses} alt=""></img>;

    return(
        <div className={props.style}>
            <div className={`transition duration-150 ease-in-out flex flex-row justify-start items-center w-full gap-2.5 hover:opacity-75 active:opacity-50 ${props.classes}`}>
                {props.textFirst 
                    ? <>
                        {labelComponent}
                        {iconComponent}
                    </>
                    : <>
                        {iconComponent}
                        {labelComponent}
                    </>
                }
            </div>            
        </div>
    );
}