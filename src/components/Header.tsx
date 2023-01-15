import { useNavigate } from "react-router-dom";
import { Icons } from "./IconsEnum";
import { IconTextButton } from "./IconTextButton";

interface HeaderProps {
    isAuth: boolean;
    isReturn: boolean;
}

export function Header(props: HeaderProps) {
    const headerRightHoveringClassName = props.isAuth ? 'hover:bg-gradient-to-l from-white/5 to-white/0' : '';

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
            <div className="hover:bg-gradient-to-r from-black/20 to-black/0 rounded-bl-3xl cursor-pointer" onClick={returnHandle}>
                <div className="w-64 h-full flex flex-row justify-start">
                    <>
                        {!props.isReturn
                            ? <img src="/assets/hum-menu.svg" className="w-8 h-8 mx-5 my-2.5" alt=""></img>
                            : <IconTextButton icon={Icons.DOWN} text="Вернуться" classes="rotate-90 brightness-0 invert "/>}
                    </>
                </div>
            </div>
            <img src="/assets/logo.svg" alt="" className="cursor-pointer" onClick={homeHandle}></img>
            <div className={"rounded-br-3xl " + headerRightHoveringClassName}>
                <div className="w-64 h-full flex flex-row justify-end">
                    <>
                        {!props.isAuth
                            ? <div className="flex flex-row justify-end mx-5 my-2.5 gap-5">
                                <label className="text-[#DE1B3B] hover:text-[#E94560] font-medium cursor-pointer" onClick={signInHandle}>Войти</label>
                                <label className="hover:text-white/75 cursor-pointer" onClick={signUpHandle}>Регистрация</label>
                            </div>
                            : <div className="flex flex-row mx-5 my-2.5 justify-start items-center gap-5">
                                <label className="cursor-pointer">Имя Пользователя</label>
                                <img src="/assets/profile.svg" className="w-4 h-4 brightness-0 invert" alt=""></img>
                            </div>}
                    </>
                </div>
            </div>
        </div>
    );
}