import { Icons } from "./IconsEnum";

interface IconTextButtonProps {
    icon: Icons;
    text: string;
    classes: string;
    textFirst?: boolean;
}

export function IconTextButton(props: IconTextButtonProps) {
    const labelComponent = <label className="cursor-pointer">{props.text}</label>;
    const iconComponent = <img src={"/assets/" + props.icon + ".svg"} className={props.classes + " brightness-0 invert"} alt=""></img>;

    return(
        <div className="flex flex-row mx-5 my-2.5 justify-start items-center gap-5 hover:opacity-75 active:opacity-50">
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