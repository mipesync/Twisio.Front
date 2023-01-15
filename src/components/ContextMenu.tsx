import { Icons } from "./IconsEnum";
import { IconTextButton } from "./IconTextButton";

interface ContextMenuProps {
    contextItems:{
        icon: Icons,
        text: string
    }[],
    isRight?: boolean
}

export function ContextMenu({ contextItems, isRight }: ContextMenuProps) {
    const round = isRight ? "rounded-l-3xl" : "rounded-r-3xl";
    const margin = isRight ? "ml-5" : "mr-5";

    return(
        <div className={"w-fit h-fit aspect-square " + round} style={{
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.25)'
        }}>
                {contextItems.map((item, index) => <IconTextButton icon={ item.icon } text={ item.text } key={index}
                classes={"m-2.5 gap-2.5 " + margin} imgClasses="w-5 h-5 brightness-0 invert"/>)}
        </div>
    );
}