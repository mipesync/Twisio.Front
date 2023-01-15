import { Icons } from "./IconsEnum";

interface IconTextButtonProps {
    icon: Icons;
    text: string;
    classes: string;
    textFirst?: boolean;
}

export function IconTextButton(props: IconTextButtonProps) {
    const labelComponent = <label className="cursor-pointer">{props.text}</label>;
    const iconComponent = <img src={"/assets/" + props.icon + ".svg"} className={"w-4 h-4 " + props.classes} alt=""></img>;

    return(
        <div className="flex flex-row mx-5 my-2.5 justify-start items-center gap-5">
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