import { Icons } from "../IconsEnum";

export class ContextMenuData {
    static CATEGORY_DATA = [
        {icon: Icons.ARCHITECTURE, text: "Архитектура"},
        {icon: Icons.WEB_DESIGN, text: "Веб-дизайн"},
        {icon: Icons.PHOTO, text: "Фотографии"},
        {icon: Icons.VIDEO, text: "Видео"},
        {icon: Icons.ENGINEER, text: "Инженерия"},
        {icon: Icons.PAINTER, text: "Искусство"},
        {icon: Icons.CODE, text: "Разработка"},
        {icon: Icons.MUSIC, text: "Музыка"},
    ];

    static TOOLS_DATA = [
        {icon: Icons.PLUS, text: "Создать альбом"},
        {icon: Icons.CHAT, text: "Сообщения"},
        {icon: Icons.BOOKMARK, text: "Закладки"},
        {icon: Icons.LIGHT_THEME, text: "Сменить тему"},
        {icon: Icons.EXCLAMATION, text: "О нас"},
    ];
}