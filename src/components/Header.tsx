import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import { HumburgerMenu } from "./HumburgerMenu";
import { Icons } from "./IconsEnum";
import { IconTextButton } from "./Buttons/IconTextButton/IconTextButton";
import { IconTextButtonStyle } from "./Buttons/IconTextButton/IconTextButton.style";
import { useContext } from "react";
import { Context } from "..";

interface HeaderProps {
    isReturn: boolean;
}

export function Header({ isReturn }: HeaderProps) {
    const navigate = useNavigate();
    const {store} = useContext(Context);

    const user = store.user;    

    function returnHandle() {
        navigate('/');
    }

    function homeHandle() {
        navigate('/');
    }

    function signInHandle() {
        navigate('/signIn')
    }

    function signUpHandle() {
        navigate('/signUp')
    }

    const isHeaderChange = useMediaQuery({ query: '(max-width: 600px)' });
    
    return(
        <div className="w-full h-fit bg-black/10 flex flex-row justify-between items-center rounded-b-3xl border-b-2 border-white" style={{
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.25)'
        }}>
            <div className={"rounded-bl-3xl " + (isReturn ? 'hover:bg-gradient-to-r from-black/20 to-black/0 cursor-pointer' : '')} 
            onClick={returnHandle}>
                <div className={`${isHeaderChange ? "w-fit" : "w-64"} h-full  flex flex-row justify-start`}>
                    <>
                        {!isReturn
                            ? <HumburgerMenu />
                            : <IconTextButton icon={Icons.DOWN} text={`${isHeaderChange ? "" : "Вернуться"}`} classes="mx-5 my-2.5 gap-5" 
                            imgClasses="w-4 h-4 rotate-90 brightness-0 invert" style={IconTextButtonStyle.HOVER_BG_TRANSPARENT} />
                        }
                    </>
                </div>
            </div>
            <img src="/assets/logo.svg" alt="" className="w-[83px] h-[28px] cursor-pointer hover:opacity-75 active:opacity-50" 
            onClick={homeHandle}></img>
            <div className={"rounded-br-3xl " + (store.isAuth ? 'hover:bg-gradient-to-l from-black/20 to-black/0 cursor-pointer' : '')}>
                <div className={`${isHeaderChange ? "w-fit" : "w-64"} h-full flex flex-row justify-end items-center`}>
                    {!store.isAuth
                        ? isHeaderChange 
                            ? <Link to="/signIn">
                                <IconTextButton icon={Icons.LOGIN} classes="mx-5 my-2.5 cursor-pointer" 
                                    imgClasses="w-4 h-4 brightness-0 invert" style={IconTextButtonStyle.HOVER_BG_TRANSPARENT} />
                                </Link>
                            :   <div className="flex flex-row justify-end items-center mx-5 my-2.5 gap-5">
                                <label className="text-[#DE1B3B] hover:text-[#B0152F] active:text-[#871125] font-medium cursor-pointer" 
                                onClick={signInHandle}>Войти</label>
                                <label className="hover:text-white/75 active:text-white/50 cursor-pointer" 
                                onClick={signUpHandle}>Регистрация</label>
                            </div>
                        : <IconTextButton icon={Icons.PROFILE} src={user.profileImagePath ? user.profileImagePath : ""} text={`${isHeaderChange ? "" : user.firstName + " " + user.lastName}`} classes="mx-5 my-2.5 gap-5"
                        imgClasses={`w-8 h-8 rounded-[50%] ${!user.profileImagePath && 'brightness-0 invert'} object-cover`} textFirst={true} style={IconTextButtonStyle.HOVER_BG_TRANSPARENT}/>
                    }
                </div>
            </div>
        </div>
    );
}