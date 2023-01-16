import { Icons } from "../IconsEnum";
import { IconTextButtonStyle } from "./IconTextButton.style";

interface IconTextButtonProps {
    icon: Icons;
    text: string;
    imgClasses?: string;
    classes?: string;
    textFirst?: boolean;
    style: IconTextButtonStyle;
}

export function IconTextButton(props: IconTextButtonProps) {
    const labelComponent = <label className="cursor-pointer whitespace-nowrap">{props.text}</label>;
    const iconComponent = <img src={`/assets/${props.icon}.svg`} className={props.imgClasses} alt=""></img>;

    return(
        <div className={props.style}>
            <div className={`flex flex-row justify-start items-center ${props.classes}`}>
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