import { useState } from "react";
import { AlbumPreviewModel } from "../../models/albumPreview.model";
import { BookmarkButton } from "../Buttons/BookmarkButton";
import { IconButton } from "../Buttons/IconButton";
import { Icons } from "../IconsEnum";
import { ValueMap } from "./ValueMap";

interface AlbumPreviewProp {
    item: AlbumPreviewModel;
}

export function AlbumPreview({item}: AlbumPreviewProp) {
    const [state, setState] = useState(false);

    return(
        <div className="w-96 h-64 flex flex-col gap-1.5 ">
            <div className="relative">
                <BookmarkButton isBookmark={item.isBookmark} classes="absolute right-4 top-4"/>
                <div className={`transition-all duration-300 w-96 items-center aspect-video rounded-3xl cursor-pointer`} 
                onMouseEnter={() => setState(true)}
                onMouseLeave={() => setState(false)}
                    style={{
                        backgroundImage: `url(${item.albumCover})`, 
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)" 
                    }}>
                    <div className={`transition-all duration-300 flex flex-col gap-2.5 px-2.5 absolute rounded-b-3xl bottom-0 py-2.5 opacity-0 ${state && "opacity-100"} bg-black/40`}>
                        <label className="font-medium cursor-pointer">{item.title}</label>
                        <label className="font-normal cursor-pointer">{item.desc}</label>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between text-xs px-2.5">
                <div className="flex flex-row justify-start items-center gap-2.5">
                    <div className={`w-8 aspect-square rounded-3xl ${!item.avatar && 'brightness-0 invert'}`}
                        style={{
                            backgroundImage: `url(${item.avatar ? item.avatar : "/assets/profile.svg"})`,
                            backgroundSize: 'cover'
                        }}/>
                    <label className="font-medium">{item.username}</label>
                </div>
                <div className="flex flex-row justify-end items-center gap-2.5">
                    <div className="flex flex-row gap-1.5 items-center">
                        <img src="/assets/eye-icon.svg" className="w-6 h-6 brightness-0 invert" alt=""></img>
                        <label className="font-bold">{ValueMap.countsMap(item.views.toString())}</label>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center">
                        <IconButton isSelected={item.isLiked} idleIcon={Icons.HEART} activeIcon={Icons.HEART_ACTIVE}/>
                        <label className="font-bold">{ValueMap.countsMap(item.likes.toString())}</label>
                    </div>
                </div>
            </div>
        </div>
    );
}