import { Icons } from "../IconsEnum";
import { IconButton } from "./IconButton";

interface BookmarkButtonProps {
    isBookmark: boolean;
    classes: string;
}

export function BookmarkButton({isBookmark, classes}: BookmarkButtonProps) {
    return(
        <div className={`w-8 aspect-square rounded-lg bg-black/10 flex flex-row justify-center items-center 
            hover:bg-black/20 active:bg-black/30 cursor-pointer ${classes}`} style={{
            boxShadow: '0px 0px 2px rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(2.5px)'
        }}>            
            <IconButton isSelected={isBookmark} idleIcon={Icons.BOOKMARK} activeIcon={Icons.BOOKMARK_ACTIVE}/>
        </div>
    );
}