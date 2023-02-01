import axios from "axios";
import React, { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../..";
import { useRoles } from "../../../hooks/useRoles.hook";
import { SignUpRequestModel } from "../../../models/request/signUp.model.request";
import { RoleResponseModel } from "../../../models/response/role.model.response";
import { IconButton } from "../../Buttons/IconButton";
import { TextButton } from "../../Buttons/TextButton";
import { TextToggleButton } from "../../Buttons/ToggleButtons/TextToggleButton";
import { Icons } from "../../IconsEnum";
import { SubmitInput } from "../../Inputs/SubmitInput";
import { TextInput } from "../../Inputs/TextInput/TextInput";
import { TextInputType } from "../../Inputs/TextInput/TextInputType";
import { ErrorNotifyPopUp } from "../../PopUp/ErrorNotifyPopUp";
import { SuccessNotifyPopUp } from "../../PopUp/SuccessNotifyPopUp";

export function SignUpAuthForm() {
    const isContentFill = useMediaQuery({ query: '(max-width: 475px)' });
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [passwordRepeat, setPassRepeat] = useState('');
    
    const [successModalState, setSuccessModalState] = useState(false);
    const [errorModalState, setErrorModalState] = useState(false);
    const [responseError, setResponseError] = useState("");
    
    const [userNameError, setUserNameError] = useState('');
    const [userEmailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [passErrorRepeat, setPassRepeatError] = useState('');
    
    const {store} = useContext(Context);
    const roles = JSON.parse(localStorage.getItem('roles')!) as RoleResponseModel[];
    const [roleId, setRoleId] = useState("");

    const modalHandler = (modal: React.Dispatch<React.SetStateAction<boolean>>) => {
        modal(true);

        let counter = 5;
        let intervalId = setInterval(() => {
            counter = counter - 1;
            if(counter === 0) {
                clearInterval(intervalId);
                modal(false);
            }
        }, 1000);
    }
    
    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        setUserNameError('');
        setEmailError('');
        setPassError('');
        setPassRepeatError('');

        if (!username.match(/^[a-zA-Z0-9а-яА-Я]([._-](?![._-])|[a-zA-Z0-9а-яА-Я]){3,18}[a-zA-Z0-9а-яА-Я]$/)) {
            setUserNameError('Имя пользователя должно быть не менее 4 символов, содержать буквы, цифры');
            return;
        }

        if (!email.match(/(?:[A-Za-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[A-Za-z0-9-]*[A-Za-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) {
            setEmailError('Некорректный адрес электронной почты. Образец: user@example.com');
            return;
        }

        if (!password.match(/^((?=.*[a-z])(?=.*[A-Z])|(?=.*[а-я])(?=.*[А-Я]))(?=.*\d)(?!.*[&%$]).{8,}$/)){
            setPassError('Пароль должен быть от 8-ми символов и содержать цифры, верхний регистр и иметь специальные символы');
            return;
        }

        if (!passwordRepeat.match(password)) {
            const passNotMatch = 'Пароли не совпадают';
            setPassError(passNotMatch);
            setPassRepeatError(passNotMatch);
            return;
        }
        
        store.signUp({
            username: username,
            email: email,
            password: password,
            roleId: roleId
        }).then(() => {
            modalHandler(setSuccessModalState);
        })
        .catch((e) => {
            setResponseError(e.response.data.message);
            modalHandler(setErrorModalState);
            return;
        });
    }

    return(
        <>
            <SuccessNotifyPopUp text="Письмо с подтверждением было отправлено на вашу почту" isShown={successModalState}/>
            <ErrorNotifyPopUp text={responseError} isShown={errorModalState}/>
            <form onSubmit={submitHandler} className={`p-5 flex flex-col justify-start items-center gap-[30px] rounded-3xl ${isContentFill ? 'w-full' : "w-[440px]"}`} style={{
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.25)'
            }}>
                <label className="font-bold text-xl">Регистрация</label>
                <fieldset className="flex flex-col justify-start w-full items-center gap-5">
                    <TextInput type={TextInputType.TEXT} placeholder="Имя пользователя" value={username} setValue={setUsername} error={userNameError}/>
                    <TextInput type={TextInputType.EMAIL} placeholder="user123@example.com" value={email} setValue={setEmail} error={userEmailError}/>
                    <TextInput type={TextInputType.PASSWORD} placeholder="Пароль" value={password} setValue={setPass} error={passError}/>
                    <TextInput type={TextInputType.PASSWORD} placeholder="Повторите пароль" value={passwordRepeat} setValue={setPassRepeat} error={passErrorRepeat}/>
                    <TextToggleButton data={roles} value={roleId} setToggleValue={setRoleId} />
                    <label className="text-xs">Регистрируясь на Twisio, вы соглашаетесь с 
                        <label className="cursor-pointer text-[#0073FF] hover:text-[#0073FF]/75 active:text-[#0073FF]/50"> Пользовательским соглашением </label> 
                        и 
                        <label className="cursor-pointer text-[#0073FF] hover:text-[#0073FF]/75 active:text-[#0073FF]/50"> Политикой конфиденциальности</label>
                    </label>
                    <div className="flex flex-row justify-center gap-2.5">
                        <label>Войти через: </label>
                        <IconButton idleIcon={Icons.VK} isSelected={true} />
                        <IconButton idleIcon={Icons.OK} isSelected={true} />
                        <IconButton idleIcon={Icons.TELEGRAM} isSelected={true} />
                        <IconButton idleIcon={Icons.GOOGLE} isSelected={true} />
                    </div>
                    <div className="flex flex-row justify-center gap-2.5">
                        <label>Уже есть аккаунт?</label>                    
                        <Link to="/signIn">
                                <TextButton text="Войти" className="text-[#E94560] font-medium"/>
                        </Link>
                    </div>
                    <SubmitInput value="Зарегистрироваться"/>
                </fieldset>
            </form>
        </>
    );
}