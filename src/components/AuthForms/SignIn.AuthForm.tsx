import axios from "axios";
import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../..";
import { parseJWt } from "../../actions/JwtParse";
import { API_URL } from "../../http";
import { IconButton } from "../Buttons/IconButton";
import { TextButton } from "../Buttons/TextButton";
import { Icons } from "../IconsEnum";
import { SubmitInput } from "../Inputs/SubmitInput";
import { TextInput } from "../Inputs/TextInput/TextInput";
import { TextInputType } from "../Inputs/TextInput/TextInputType";
import { ErrorNotifyPopUp } from "../PopUp/ErrorNotifyPopUp";

export function SignInAuthForm() {
    const isContentFill = useMediaQuery({ query: '(max-width: 475px)' });
    
    const [username, setUsername] = useState('');
    const [password, setPass] = useState('');
    const [rememberMe, toggleCheckbox] = useState(false);
    
    const [errorModalState, setErrorModalState] = useState(false);

    const [responseError, setResponseError] = useState("");    
    const [userNameError, setUserNameError] = useState('');
    const [passError, setPassError] = useState('');
    
    const {store} = useContext(Context);
    
    const navigate = useNavigate();

    const modalHandler = () => {
        setErrorModalState(true);

        let counter = 5;
        let intervalId = setInterval(() => {
            counter = counter - 1;
            if(counter === 0) {
                clearInterval(intervalId);
                setErrorModalState(false);
            }
        }, 1000);
    }
    

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        localStorage.clear();

        setUserNameError('');
        setPassError('');

        if (!username.match(/^[a-zA-Z0-9а-яА-Я]([._-](?![._-])|[a-zA-Z0-9а-яА-Я]){3,18}[a-zA-Z0-9а-яА-Я]$/)) {
            setUserNameError('Имя пользователя должно быть не менее 4 символов, содержать буквы, цифры');
            return;
        }

        if (!password.match(/^((?=.*[a-z])(?=.*[A-Z])|(?=.*[а-я])(?=.*[А-Я]))(?=.*\d)(?!.*[&%$]).{8,}$/)){
            setPassError('Пароль должен быть от 8-ми символов и содержать цифры, верхний регистр и иметь специальные символы');
            return;
        }
        
        store.signIn({
            username: username,
            password: password,
            rememberMe: rememberMe
        }).then(() => {
            navigate("/");    
        })
        .catch((e) => {
            setResponseError(e.response.data.message);
            modalHandler();
            return;
        });
    }

    return(
        <>
            <ErrorNotifyPopUp text={responseError} isShown={errorModalState} />
            <form onSubmit={submitHandler}
                className={`p-5 flex flex-col justify-start items-center gap-[30px] rounded-3xl ${isContentFill ? 'w-full' : "w-[440px]"}`} style={{
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.25)'
            }}>
                <span className="font-bold text-xl">Войти</span>
                <fieldset className="flex flex-col justify-start w-full items-center gap-5">
                    <TextInput type={TextInputType.TEXT} setValue={setUsername} value={username} placeholder="Имя пользователя" error={userNameError}/>
                    <TextInput type={TextInputType.PASSWORD} setValue={setPass} value={password} placeholder="Пароль" error={passError}/>
                    <div className="flex flex-row justify-start gap-2.5 items-center w-full">
                        <input type="checkbox" checked={rememberMe} className="w-4 h-4" onChange={() => toggleCheckbox(!rememberMe)}/>
                        <span>Запомнить меня</span>
                    </div>
                    <div className="flex flex-row justify-between w-full">
                            <Link to="/forgot">
                                <TextButton text="Забыли пароль?"/>
                            </Link>
                            <Link to="/signUp">
                                <TextButton text="Регистрация" className="text-[#E94560] font-medium"/>
                            </Link>
                    </div>
                    <div className="flex flex-row justify-center gap-2.5">
                        <span>Войти через: </span>
                        <IconButton idleIcon={Icons.VK} isSelected={true} />
                        <IconButton idleIcon={Icons.OK} isSelected={true} />
                        <IconButton idleIcon={Icons.TELEGRAM} isSelected={true} />
                        <IconButton idleIcon={Icons.GOOGLE} isSelected={true} />
                    </div>
                    <SubmitInput value="Войти" />
                </fieldset>
            </form>
        </>
    );
}