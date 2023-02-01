import { Icons } from "../IconsEnum";
import { IconTextButton } from "../Buttons/IconTextButton/IconTextButton";
import { IconTextButtonStyle } from "../Buttons/IconTextButton/IconTextButton.style";

interface ContextMenuProps {
    contextItems:{
        icon: Icons,
        text: string
    }[],
    isRight?: boolean,
    buttonStyle: IconTextButtonStyle,
}

export function ContextMenu({ contextItems, isRight, buttonStyle }: ContextMenuProps) {
    return(
        <div className={"w-fit h-fit aspect-square " + (isRight ? "rounded-l-3xl" : "rounded-r-3xl")} style={{
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.25)'
        }}>
                {contextItems.map((item, index) => <IconTextButton icon={ item.icon } text={ item.text } key={index}
                    classes={`${!(buttonStyle === IconTextButtonStyle.HOVER_BG_TRANSPARENT) && ""} my-2.5 gap-2.5 mx-2.5`}
                    imgClasses="w-4 h-4 brightness-0 invert" style={buttonStyle}/>)
                }
        </div>
    );
}