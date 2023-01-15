interface HeaderProps {
    isAuth: boolean;
    isReturn: boolean;
}

export function Header(props: HeaderProps) {
    return(
        <div className="w-full h-auto bg-black/10 flex flex-row justify-between rounded-b-3xl border-b-2 border-white">
            <div className="hover:bg-gradient-to-r from-black/20 to-black/0 rounded-b-3xl">
                <div className="w-64 h-full flex flex-row justify-start">
                    <>
                        {!props.isReturn
                            ? <img src="/assets/hum-menu.svg" className="w-8 h-8 mx-5 my-2.5" alt=""></img>
                            : <div className="flex flex-row mx-5 my-2.5 justify-start items-center gap-2.5">
                                <img src="/assets/down.svg" className="w-4 h-4 brightness-0 invert rotate-90" alt=""></img>
                                <input type={"button"} value="Вернуться"
                                        className="text-white font-sans font-normal" />
                            </div>}
                        {console.log(props.isReturn)}
                    </>
                </div>
            </div>
            <img src="/assets/logo.svg" alt=""></img>
            <div className="hover:bg-gradient-to-r from-black/20 to-black/0 rounded-b-3xl">
                <div className="w-64 h-full flex flex-row justify-end">
                    <>
                        {!props.isAuth
                            ? <div className="flex flex-row justify-end">
                                <label>Имя</label>
                                <label>Пользователя</label>
                            </div>
                            : <div className="flex flex-row mx-5 my-2.5 justify-start items-center">
                                <img src="/assets/profile.svg" className="w-4 h-4 brightness-0 invert" alt=""></img>
                                <input type={"button"} value="Вернуться"
                                        className="text-white font-sans font-normal" />
                            </div>}
                        {console.log(props.isReturn)}
                    </>
                </div>
            </div>
        </div>
    );
}