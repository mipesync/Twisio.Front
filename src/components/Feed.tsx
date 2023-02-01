import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FeedTestData } from "../pages/HomePage/feedTestData";
import { SortCategories } from "../pages/HomePage/sort-categories.HomePage";
import { AlbumPreview } from "./Album/AlbumPreview";
import { DropDownMenu } from "./Buttons/DropDownMenu";
import { IconButton } from "./Buttons/IconButton";
import { IconToggleButton } from "./Buttons/ToggleButtons/IconToggleButton";
import { Icons } from "./IconsEnum";

export function Feed() {
    const data = FeedTestData.Albums;
    const sortCategories = SortCategories.Categories;
    
    const isFeedCompressTo2Items = useMediaQuery({ query: '(max-width: 1255px)' });
    const isFeedCompressTo1Item = useMediaQuery({ query: '(max-width: 845px)' });

    const [windowDimenion, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      })
    
    const detectSize = () => {
    detectHW({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    })
    }

    useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
        window.removeEventListener('resize', detectSize)
    }
    }, [windowDimenion])
      
    

    return(        
        <div className="px-5 pt-5 rounded-3xl flex flex-col w-fit h-full gap-5" style={{
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.25)'
        }}>
            <div className="flex flex-row justify-between items-center font-normal">
                <IconToggleButton firstIcon={Icons.GRID_VIEW} secondIcon={Icons.LINEAR_VIEW} isSecondSelected={false} />
                <DropDownMenu data={sortCategories} />
                <div className="flex flex-row gap-2.5 justify-end items-center">
                    {/*!isFeedCompressTo1Item && <Input className="w-96" placeholder="Поиск..." type={InputType.SEARCH} />*/}
                    <IconButton idleIcon={Icons.SEARCH} />
                </div>
            </div>
            <div className={`rounded-3xl max-h-[${80}vh] overflow-y-auto`} >
                <div className={`w-fit h-full grid gap-7 ${!isFeedCompressTo2Items 
                        ? "grid-cols-3" 
                        : !isFeedCompressTo1Item 
                            ? "grid-cols-2"
                            : "grid-cols-1"
                    }`}>
                    {data.map((item, index) => <AlbumPreview item={item} key={index}/>)}
                </div>
            </div>
        </div>
    );
}