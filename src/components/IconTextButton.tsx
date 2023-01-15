import { Icons } from "./IconsEnum";

interface IconTextButtonProps {
    icon: Icons;
    text: string;
    imgClasses?: string;
    classes?: string;
    textFirst?: boolean;
}

export function IconTextButton(props: IconTextButtonProps) {
    const labelComponent = <label className="cursor-pointer">{props.text}</label>;
    const iconComponent = <img src={"/assets/" + props.icon + ".svg"} className={props.imgClasses} alt=""></img>;

    return(
        <div className={"flex flex-row justify-start items-center hover:opacity-75 active:opacity-50 " + props.classes}>
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
    );
}