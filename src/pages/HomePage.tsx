import { ContextMenu } from "../components/ContextMenu/ContextMenu";
import { ContextMenuData } from "../components/ContextMenu/ContextMenu.data";
import { Feed } from "../components/Feed";
import { Header } from "../components/Header";
import { IconTextButtonStyle } from "../components/IconTextButton/IconTextButton.style";

export function HomePage() {
    return(
        <div className="w-screen h-screen text-white font-sans font-normal flex flex-col justify-start gap-5 pb-5"
            style={{ backgroundImage: "url(/assets/bg.png)", 
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover' }}>
            <Header isAuth={true} isReturn={true}/>
            <div className="flex flex-row justify-between w-full h-full">
                <ContextMenu contextItems={ContextMenuData.CATEGORY_DATA} buttonStyle={IconTextButtonStyle.HOVER_BG_RED}/>
                <Feed/>
                <ContextMenu contextItems={ContextMenuData.TOOLS_DATA} isRight={true} buttonStyle={IconTextButtonStyle.HOVER_BG_BLUE}/>
            </div>
        </div>
    );
}