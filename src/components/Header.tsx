import { useNavigate } from "react-router-dom";
import { HumburgerMenu } from "./HumburgerMenu";
import { Icons } from "./IconsEnum";
import { IconTextButton } from "./IconTextButton";

interface HeaderProps {
    isAuth: boolean;
    isReturn: boolean;
}

export function Header(props: HeaderProps) {
    const headerRightHoveringClassName = props.isAuth ? 'hover:bg-gradient-to-l from-white/5 to-white/0 cursor-pointer' : '';
    const headerLeftHoveringClassName = props.isReturn ? 'hover:bg-gradient-to-r from-black/20 to-black/0 cursor-pointer' : '';

    const navigate = useNavigate();

    function returnHandle() {
        navigate('#');
    }

    function homeHandle() {
        navigate('#');
    }

    function signInHandle() {
        navigate('#')
    }

    function signUpHandle() {
        navigate('#')
    }

    return(
        <div className="w-full h-auto bg-black/10 flex flex-row justify-between rounded-b-3xl border-b-2 border-white text-white font-sans font-normal">
            <div className={"rounded-bl-3xl " + headerLeftHoveringClassName} onClick={returnHandle}>
                <div className="w-64 h-full flex flex-row justify-start">
                    <>
                        {!props.isReturn
                            ? <HumburgerMenu />
                            : <IconTextButton icon={Icons.DOWN} text="Вернуться" classes="w-4 h-4 rotate-90"/>
                        }
                    </>
                </div>
            </div>
            <img src="/assets/logo.svg" alt="" className="cursor-pointer  hover:opacity-75 active:opacity-50" onClick={homeHandle}></img>
            <div className={"rounded-br-3xl " + headerRightHoveringClassName}>
                <div className="w-64 h-full flex flex-row justify-end ">
                    <>
                        {!props.isAuth
                            ? <div className="flex flex-row justify-end items-center mx-5 my-2.5 gap-5">
                                <label className="text-[#DE1B3B] hover:text-[#B0152F] active:text-[#871125] font-medium cursor-pointer" onClick={signInHandle}>Войти</label>
                                <label className="hover:text-white/75 active:text-white/50 cursor-pointer" onClick={signUpHandle}>Регистрация</label>
                            </div>
                            : <IconTextButton icon={Icons.PROFILE} text="Имя Пользователя" classes="w-8 h-8" textFirst={true}/>
                        }
                    </>
                </div>
            </div>
        </div>
    );
}