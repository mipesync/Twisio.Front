import { ContextMenu } from "../components/ContextMenu";
import { Header } from "../components/Header";
import { Icons } from "../components/IconsEnum";

export function HomePage() {
    const categoryContextData = [
        {icon: Icons.ARCHITECTURE, text: "Архитектура"},
        {icon: Icons.WEB_DESIGN, text: "Веб-дизайн"},
        {icon: Icons.PHOTO, text: "Фотографии"},
        {icon: Icons.VIDEO, text: "Видео"},
        {icon: Icons.ENGINEER, text: "Инженерия"},
        {icon: Icons.PAINTER, text: "Искусство"},
        {icon: Icons.CODE, text: "Разработка"},
        {icon: Icons.MUSIC, text: "Музыка"},
    ];

    const toolsContextData = [
        {icon: Icons.PLUS, text: "Создать альбом"},
        {icon: Icons.CHAT, text: "Сообщения"},
        {icon: Icons.BOOKMARK, text: "Закладки"},
        {icon: Icons.LIGHT_THEME, text: "Сменить тему"},
        {icon: Icons.EXCLAMATION, text: "О нас"},
    ];

    return(
        <div className="w-screen h-screen text-white font-sans font-normal flex flex-col justify-start gap-5"
            style={{ backgroundImage: "url(/assets/bg.png)", 
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover' }}>
            <Header isAuth={true} isReturn={true}/>
            <div className="flex flex-row justify-between w-full h-full">
                <ContextMenu contextItems={categoryContextData}/>
                <ContextMenu contextItems={toolsContextData} isRight={true}/>
            </div>
        </div>
    );
}