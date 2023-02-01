import { ContextMenu } from "../../components/ContextMenu/ContextMenu";
import { ContextMenuData } from "../../components/ContextMenu/ContextMenu.data";
import { Feed } from "../../components/Feed";
import { Header } from "../../components/Header";
import { IconTextButtonStyle } from "../../components/Buttons/IconTextButton/IconTextButton.style";
import { useMediaQuery } from "react-responsive";

export function HomePage() {
    const isContextHide = useMediaQuery({ query: '(max-width: 1630px)' });

    return(
        <div className="w-screen h-screen text-white font-sans font-normal flex flex-col justify-start gap-5 pb-5 overflow-clip"
            style={{ backgroundImage: "url(/assets/bg.png)", 
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover' }}>
            <Header isReturn={false} />
            <div className={`flex flex-row ${!isContextHide ? "justify-between" : "justify-center"} w-full h-full`}>
                {!isContextHide && <ContextMenu contextItems={ContextMenuData.CATEGORY_DATA} buttonStyle={IconTextButtonStyle.HOVER_BG_RED}/>}
                <Feed />
                {!isContextHide && <ContextMenu contextItems={ContextMenuData.TOOLS_DATA} isRight={true} buttonStyle={IconTextButtonStyle.HOVER_BG_BLUE}/>}
            </div>
        </div>
    );
}